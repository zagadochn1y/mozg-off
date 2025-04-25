import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = process.env.PORT || 5000;
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) 
{
    console.error("Ошибка: API-ключ отсутствует. Укажите его в .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => 
{
    console.log("Получен запрос от клиента:", req.body);
    
    try 
    {
        const { history } = req.body;

        const formattedHistory = history.map(({ role, text }) => ({
            role,
            parts: [{ text }]
        }));

        if (formattedHistory.length === 0 || formattedHistory[0].role !== "user") 
        {
            formattedHistory.unshift({
                role: "user",
                parts: [{ text: "Привет! Ты — тренер по прокачке разных способностей мозга! Говори мотивирующе!" }]
            });
        }

        const chatSession = model.startChat({
            generationConfig: { temperature: 1.5, topP: 0.8, topK: 20, maxOutputTokens: 1024 },
            history: formattedHistory
        });

        const result = await chatSession.sendMessage(history[history.length - 1]?.text || "Привет!");
        const responseText = await result.response.text();

        res.json({ response: responseText.trim() });
    } 
    catch (error) 
    {
        console.error("Ошибка API:", error);
        res.status(500).json({ error: "Ошибка обработки запроса" });
    }
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
