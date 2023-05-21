import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontFamily: 'Roboto' }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
