import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

// Frontegg configuration using environment variables
const contextOptions = {
    baseUrl: import.meta.env.VITE_APP_FRONTEGG_BASE_URL,  // Use environment variable
    clientId: import.meta.env.VITE_APP_FRONTEGG_CLIENT_ID,  // Use environment variable
    appId: import.meta.env.VITE_APP_FRONTEGG_APP_ID       // Use environment variable
};

const authOptions = {
    // Uncomment to keep session alive
    // keepSessionAlive: true
};

// Render the app with the Frontegg Provider
ReactDOM.createRoot(document.getElementById('root')).render(
    <FronteggProvider
        contextOptions={contextOptions}
        hostedLoginBox={true}
        authOptions={authOptions}>
        <App />
    </FronteggProvider>
);
