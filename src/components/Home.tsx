import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Form } from './Form';
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
      <main className="home">
        <h1>HOLIDAY PRO-RATA</h1>
        <Form />
      </main>
    </ThemeProvider>
  );
};
