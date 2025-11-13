import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// This is the *only* CSS import we need.
// It loads your `index.css` file, which
// in turn loads all of Tailwind.
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)