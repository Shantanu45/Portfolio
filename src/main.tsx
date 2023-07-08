import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './index.css'

setTimeout(() => 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App/>
  </Router>
), 1000)
