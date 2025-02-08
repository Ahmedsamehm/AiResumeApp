import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

export default function useAi() {
  const [Loading, setLoading] = useState(false);
  const AiChat = async (prompt) => {
    setLoading(true);
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GeminiAi_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    setLoading(false);
    return result.response.text();
  };
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleResult = async () => {
    setLoading(true);
    const prompt = `Write a professional and ATS-friendly summary and improve the following summary and make it more ATS-friendly and professional fix any grammatical errors and make it more professional don't change the meaning don't give me option just give  me right one and most good one  : ${inputText}`;
    const result = await AiChat(prompt);
    setOutputText(result);
    setLoading(false);
  };

  return {
    AiChat,
    handleResult,
    setInputText,
    outputText,
    setOutputText,
    Loading,
  };
}
