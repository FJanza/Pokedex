import "src/styles/globals.css";
import type {AppProps} from "next/app";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme();

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
