import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-pl597btu.us.auth0.com"
    clientId="7wRModNumd8L4RfE1w0JwzUxJoK8AXXn"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
