// mengimport beberapa dependensi yang dibutuhkan
import React from 'react'
import ReactDOM from 'react-dom/client'

// mengimport bundle css dari bootstrap dan css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'

// mengimport app
import App from './App.jsx'

// membuat react dom untuk merender seluruh komponen react (.jsx)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
