import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="adhd-planner.eu.auth0.com"
        clientId="XZHJ9q0P6OmyZ6XVKxwHXo5A9SLbVy0e"
        authorizationParams={{
            redirect_uri: window.location.origin,
            audience: "https://adhd-planner.eu.auth0.com/api/v2/",
            scope: "read:current_user update:current_user_metadata"
        }}
    >
        <App />
    </Auth0Provider>
);




