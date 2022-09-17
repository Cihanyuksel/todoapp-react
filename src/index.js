import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoContextProvider } from "./context/TodoContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthProvider>
        <TodoContextProvider>
          <App />
        </TodoContextProvider>
      </AuthProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
