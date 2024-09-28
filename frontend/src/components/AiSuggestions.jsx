
// AiSuggestions.js
import { useState, useEffect } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiSuggestions = ({editorRef}) => {
  const toast = useToast();
  const location = useLocation();
  const [aiSuggestions, setAiSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const getAiSuggestions = async () => {

    const sourceCode = editorRef.current.getValue();
    try {
      setIsLoading(true);
    const prompt = `Provide suggestions for code optimization, improvements, and error identification for the following code:\n\n${sourceCode}`;
    
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
      setAiSuggestions(result.response.text()); 
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      toast({
        title: "AI Error",
        description: "Failed to fetch AI suggestions.",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAiSuggestions();
  }, []);

  return (
    <Box w="100%" height="100%" p={4}>
      <Text fontWeight="bold">AI Code Suggestions:</Text>
      <Text as="pre">
        {aiSuggestions || "No suggestions yet. The AI will provide feedback shortly."}
      </Text>
    </Box>
  );
};

export default AiSuggestions;
