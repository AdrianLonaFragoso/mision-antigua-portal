import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Auth0Provider
    domain="dev-nx3w6c1lfrjns00v.us.auth0.com"
    clientId="aWCYmDn9CauSPo5vYiwLBtAMkMhKp7gL"
    authorizationParams={{
      redirectUri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
