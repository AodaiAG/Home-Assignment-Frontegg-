import './App.css';
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react';
import { AdminPortal } from '@frontegg/react';
import TenantSwitcher from './components/TenantSwitcher';  // Import the TenantSwitcher component

function App() {
    const { user, isAuthenticated } = useAuth();
    const loginWithRedirect = useLoginWithRedirect();

    const logout = () => {
        const baseUrl = ContextHolder.getContext().baseUrl;
        window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };

    const openAdminPortal = () => {
        AdminPortal.show();
    };

    return (
        <div className="App">
            {isAuthenticated ? (
                <div>
                    <div>
                        <img src={user?.profilePictureUrl} alt={user?.name} />
                    </div>
                    <div>
                        <span>Logged in as: {user?.name}</span>
                    </div>
                    <div>
                        <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
                    </div>
                    <div>
                        <button onClick={() => logout()}>Click to logout</button>
                    </div>
                    <div>
                        <button onClick={openAdminPortal}>Settings</button>
                    </div>
                    {/* Add the TenantSwitcher here */}
                    <TenantSwitcher />
                </div>
            ) : (
                <div>
                    <button onClick={() => loginWithRedirect()}>Click me to login</button>
                </div>
            )}
        </div>
    );
}

export default App;
