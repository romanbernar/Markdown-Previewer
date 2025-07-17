import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
  <div>
  <header> 
  Welcome to my Markdown previewer. Type Markdown in the left side, and see it translated into HTML in real time. 
  </header>
    < App />
    </div>
  </StrictMode>,
)
