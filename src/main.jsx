import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* we wrap app.jsx component with the browserrouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
