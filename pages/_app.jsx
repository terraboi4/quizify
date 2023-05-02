import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#a9e03c',

      secondary: '#b6d8ef',

      accent: '#e28b5d',

      neutral: '#1A1825',

      'base-100': '#f3f4f6',

      info: '#9FDCEF',

      success: '#0E6C50',

      warning: '#F4962A',

      error: '#F1605B',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
