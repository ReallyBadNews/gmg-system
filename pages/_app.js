import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import { GlobalStyle } from "../components/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
