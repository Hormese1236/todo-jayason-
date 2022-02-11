import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../utils/authConfig";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Index.css";
import "../styles/Togglebutton.css";




function MyApp({ Component, pageProps }) {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
