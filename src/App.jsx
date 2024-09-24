import './App.css';
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react';
import { AdminPortal } from '@frontegg/react';
import TenantSwitcher from './components/TenantSwitcher';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OAuthCallback from './components/OAuthCallback';  // Create this component
import HomePage from './components/HomePage';  // Create this component for your homepage

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
        <Router>
            <Switch>
                {/* Route for OAuth callback */}
                <Route path="/oauth/callback" component={OAuthCallback} />

                {/* Main application route */}
                <Route path="/" exact>
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
                                    <button onClick={logout}>Click to logout</button>
                                </div>
                                <div>
                                    <button onClick={openAdminPortal}>Settings</button>
                                </div>
                                <TenantSwitcher />
                            </div>
                        ) : (
                            <div>
                                <button onClick={() => loginWithRedirect()}>Click me to login</button>
                            </div>
                        )}
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
