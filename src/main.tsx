import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BrowserExtensions from './screens/BrowserExtensions'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserExtensions/>
  </StrictMode>,
)
