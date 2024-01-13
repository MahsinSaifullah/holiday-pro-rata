import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Form } from './Form';
import { Result } from './Result';
import './home.scss';

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export const Home = () => {
  return (
    <ThemeProvider theme={THEME}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className="home">
          <h1>HOLIDAY PRO-RATA</h1>
          <Form />
          <Result />
        </main>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
