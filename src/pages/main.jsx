import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import '../styles/index.css'

import App from './App.jsx'
import ChatBotPage from './chatBot/ChatBotApp.jsx'
import Games from './Games.jsx'
import ClickGame from './games/clickGame/clickGame.jsx'
import FindDifferences from './games/differences/differences.jsx'
import PyramidGame from './games/pyramidGame/pyramidGame.jsx'
import NumbersGame from  './games/numbersGame/numbersGame.jsx'
import MemoryGame from './games/memoryGame/memoryGame.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/chatbot" element={<ChatBotPage />} />

        <Route path="/games" element={<Games />} />

        <Route path="/clickgame" element={<ClickGame />}/>

        <Route path="/findDifference" element={<FindDifferences />}/>

        <Route path="/numbersGame" element={<NumbersGame />}/>

        <Route path="/pyramidGame" element={<PyramidGame />}/>

        <Route path="/memoryGame" element={<MemoryGame />}/>
        
      </Routes>
    </Router>
  </StrictMode>,
)
