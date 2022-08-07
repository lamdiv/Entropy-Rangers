import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css'
import { AuthContextProvider } from './store/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthContextProvider>
        <App />
    </AuthContextProvider>
    )
