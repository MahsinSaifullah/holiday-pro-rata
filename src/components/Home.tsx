import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Form } from './Form';
import { Result } from './Result';
import './home.scss';
import { ICalculateOption, FormData } from '../types';
import { CalculateOption } from './CalculateOption';

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const calculateHoliday = (
  formData: FormData,
  calculateOption: ICalculateOption
) => {
  const { leavePerAnnum, dataTo, dateFrom, workCapacity, workingHourPerDay } =
    formData;

  const leaveInDays =
    calculateOption === 'days'
      ? leavePerAnnum
      : (leavePerAnnum || 0) / (workingHourPerDay || 1);

  const numberOfDays = dataTo?.diff(dateFrom, 'day') || 0;

  const proRataLeaveInDays =
    (numberOfDays / 365) * (leaveInDays || 0) * ((workCapacity || 0) / 100);

  return calculateOption === 'days'
    ? proRataLeaveInDays
    : proRataLeaveInDays * (workingHourPerDay || 0);
};

export const Home = () => {
  const [result, setResult] = useState<number | null>(null);
  const [calculateOption, setCalculateOptions] =
    useState<ICalculateOption | null>(null);

  const handleOnCalculate = (formData: FormData | null) => {
    if (!formData || !calculateOption) {
      return;
    }
    setResult(calculateHoliday(formData, calculateOption));
  };

  return (
    <ThemeProvider theme={THEME}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className="home">
          <h1>HOLIDAY PRO-RATA</h1>
          {calculateOption ? (
            <>
              <Form
                onCalculate={handleOnCalculate}
                calculateOption={calculateOption}
              />
              {result !== null && (
                <Result result={result} calculateOption={calculateOption} />
              )}
            </>
          ) : (
            <CalculateOption
              onOptionSelect={(option) => setCalculateOptions(option)}
            />
          )}
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
