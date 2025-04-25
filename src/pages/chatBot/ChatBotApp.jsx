import { useState, useEffect, useRef } from "react";

import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

import FadeInSection from '../../components/FadeInSection';
import HeaderSection from '../../components/HeaderSection';

import './ChatBotApp.css'
import '../../styles/App.css'

import twitterIcon from '../../images/twitter-icon.png'
import instagramFooterIcon from '../../images/instagram-footer-icon.png'
import facebookIcon from '../../images/facebook-icon.png'

const App = () => 
{
    const [chatHistory, setChatHistory] = useState([]);
    const chatBodyRef = useRef(null);

    useEffect(() => 
    {
        if (chatBodyRef.current) 
        {
            chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
        }
    }, [chatHistory]);

    const generateBotResponse = async (history) => {
        // Добавляем "Думаю над ответом..."
        setChatHistory(prev => [...prev, { role: "model", text: "Думаю над ответом...", typing: true }]);
    
        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ history })
            });
    
            const data = await response.json();
            const fullText = data.response;
            let index = 0;
    
            const interval = setInterval(() => {
                index++;
    
                setChatHistory(prev => {
                    const updated = [...prev];
                    const lastTypingIndex = updated.findIndex(msg => msg.typing);
    
                    if (lastTypingIndex !== -1) {
                        updated[lastTypingIndex] = {
                            role: "model",
                            text: fullText.slice(0, index),
                            typing: index < fullText.length
                        };
                    }
    
                    return updated;
                });
    
                if (index >= fullText.length) {
                    clearInterval(interval);
                }
            }, 20); // можно ускорить анимацию
        } catch (err) {
            console.error("Ошибка при получении ответа от бота:", err);
            setChatHistory(prev => [...prev, {
                role: "model",
                text: "Произошла ошибка. Попробуйте ещё раз.",
                typing: false
            }]);
        }
    };
    
    
    return (
        <>
            <HeaderSection />
            <FadeInSection>
                <div className="container">
                    <div className="chatbot-popup">
                        <div className="chat-header">
                            <div className="header-info">
                                <ChatbotIcon />
                                <h2 className="logo-text">mozgOFF Chatbot</h2>
                            </div>
                        </div>
                        <div className="chat-body" ref={chatBodyRef}>
                            <div className="message bot-message">
                                <ChatbotIcon />
                                <p className="message-text">
                                    Приветствую тебя!<br /> 
                                    Я твой ИИ-тренер и помощник!<br />
                                    Чем могу помочь?
                                </p>
                            </div>

                            {chatHistory.map((chat, index) => (
                                <ChatMessage key={index} chat={chat} />
                            ))}
                        </div>

                        <div className="chat-footer">
                            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <footer>
                <div className='footer-container'>
                  <div className='footer-icons'>
                    <img src={twitterIcon} alt="twitter icon" />
                    <img src={instagramFooterIcon} alt="instagram icon" />
                    <img src={facebookIcon} alt="facebook icon" />
                  </div>
                  <p>@2025 МозгOFF. Все права защищены.</p>
                </div>
            </footer>
        </>
    );
};

export default App;
