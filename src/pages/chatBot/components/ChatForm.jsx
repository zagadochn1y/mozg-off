import { useRef } from "react";
import '../ChatBotApp.css';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => 
{
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
    
        // Обновляем историю чата с сообщением пользователя
        const updatedHistory = [...chatHistory, { role: "user", text: userMessage }];
        setChatHistory(updatedHistory);
    
        // Только вызываем генерацию ответа
        generateBotResponse(updatedHistory);
    };

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Введите сообщение..." className="message-input" required />
            <button className="material-symbols-rounded">arrow_upward</button>      
        </form>
    );
};

export default ChatForm;
