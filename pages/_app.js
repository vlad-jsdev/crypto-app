import "../styles/globals.css";
import { AppWrapper, TransactionProvider } from "../context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
