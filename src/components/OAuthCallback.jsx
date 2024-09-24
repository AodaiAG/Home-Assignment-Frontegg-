// src/components/OAuthCallback.jsx
import React, { useEffect } from 'react';
import { useLoginWithRedirect } from '@frontegg/react';

const OAuthCallback = () => {
    const { loginWithRedirect } = useLoginWithRedirect();

    useEffect(() => {
        // Automatically trigger the login flow after redirect
        loginWithRedirect();
    }, [loginWithRedirect]);

    return (
        <div>
            <h2>Redirecting...</h2>
        </div>
    );
};

export default OAuthCallback;
