import './App.css';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './providers/ThemeProvider';
import { ThemeSwitchButton } from './components/themeSwitcher/ThemeSwitcher';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ThemeSwitchButton />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
