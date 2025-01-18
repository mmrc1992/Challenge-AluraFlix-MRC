import { StrictMode } from 'react' // es el React que figura en el video
import { createRoot } from 'react-dom/client' //Es el react DOM que figura en el video
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('app')).render( // es la const root del video y con el render pasa lo mismo
  <StrictMode>
    <App />
  </StrictMode>,
)
