import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Auth0Provider
      domain="dev-2cb3a3ql36zkocia.us.auth0.com"
      clientId="u924vRQOHuUrIvnsifuBvsvte8WHWobp"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App /> 
    </Auth0Provider>
    
  </Router>
);


