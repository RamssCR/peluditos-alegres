import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WebContextProvider } from './context/WebContextProvider.jsx'
import './styles/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebContextProvider>
      <App />
    </WebContextProvider>
  </React.StrictMode>,
)
