import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import UseMentoringDataProvider from './Context/UseMentoringDataProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseMentoringDataProvider>
        <App />
      </UseMentoringDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
