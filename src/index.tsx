import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <BrowserRouter>
    <StrictMode>
        <App />
    </StrictMode>
  </BrowserRouter>
);