import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.scss';

const element = document.querySelector('#root')!;
const root = ReactDOM.createRoot(element);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
