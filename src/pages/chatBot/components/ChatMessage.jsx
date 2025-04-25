import ChatbotIcon from "./ChatbotIcon";
import ReactMarkdown from "react-markdown";
import '../ChatBotApp.css';

const ChatMessage = ({ chat }) => {
    return (
        <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
            {chat.role === "model" && <ChatbotIcon />}
            <div className="message-text">
                <ReactMarkdown>{chat.text}</ReactMarkdown>
            </div>
        </div>
    );
};

export default ChatMessage;