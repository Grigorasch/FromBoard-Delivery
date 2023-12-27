import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const theme = {
  mainColor: '#8B5CF6',
  white: '#F9FAFB',
  gray: '#9CA3AF',
  black: '#111827',
  headerBackground: '#F9FAFB',
  mainBackground: '#E5E7EB',
  footerBackground: '#111827',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <Main />
    </React.StrictMode>
  </ThemeProvider>
);



reportWebVitals();
