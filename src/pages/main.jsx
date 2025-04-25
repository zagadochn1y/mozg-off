import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import '../styles/index.css'
import App from './App.jsx'
import ChatBotPage from './chatBot/ChatBotApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/chatbot" element={<ChatBotPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
