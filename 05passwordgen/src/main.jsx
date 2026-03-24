import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*Iska matlab:

HTML me jo 'root' div hai usko select karo

Usme React app render karo

React app ka main component hai '<App />' */
