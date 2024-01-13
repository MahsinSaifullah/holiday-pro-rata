import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Form } from './Form';
import { Result } from './Result';
import './home.scss';
import { FormData } from '../types';

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const calculateHoliday = (formData: FormData) => {
  const { leavePerAnnum, dataTo, dateFrom, workCapacity } = formData;

  const numberOfDays = dataTo?.diff(dateFrom, 'day') || 0;

  return (
    (numberOfDays / 365) * (leavePerAnnum || 0) * ((workCapacity || 0) / 100)
  );
};

export const Home = () => {
  const [result, setResult] = useState<number | null>(null);

  const handleOnCalculate = (formData: FormData | null) => {
    if (!formData) {
      return;
    }
    setResult(calculateHoliday(formData));
  };

  return (
    <ThemeProvider theme={THEME}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className="home">
          <h1>HOLIDAY PRO-RATA</h1>
          <Form onCalculate={handleOnCalculate} />
          {result !== null && <Result result={result} />}
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
