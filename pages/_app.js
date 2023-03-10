import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/responsive.css";
import { LocalStorageProvider } from "../components/Context";

function MyApp({ Component, pageProps }) {
  return (
    <LocalStorageProvider>
      <Component {...pageProps} />
    </LocalStorageProvider>
  );
}

export default MyApp;
