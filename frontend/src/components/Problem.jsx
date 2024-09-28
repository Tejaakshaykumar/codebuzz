
import { useRef, useState } from "react";
import { Box, HStack, VStack, IconButton, Collapse, Text, Button, Stack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS, SAMPLE_INPUTS, SAMPLE_OUTPUTS } from "../constants";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import AiSuggestions from "./AiSuggestions";

const Problem = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [isOutputVisible, setIsOutputVisible] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState(0);
  const [isAiSuggestionsVisible, setIsAiSuggestionsVisible] = useState(false);


  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const toggleOutput = () => {
    setIsOutputVisible(!isOutputVisible);
  };

  const handleTestCase = (index) => {
    setSelectedTestCase(index);
    // Trigger code run here with the selected test case
  };

  return (
    <Box position="relative" height="150vh">
      <HStack spacing={4} align="start" height="100%">
        <Box w="50%" p={4} borderRight="1px solid lightgray">
          <Text fontSize="xl" fontWeight="bold">
            Find the nth Fibonacci Number
          </Text>
          <Text mt={2}>
            Given an integer <strong>n</strong>, find the nth Fibonacci number. The Fibonacci sequence is defined as:
          </Text>
          <Text mt={2}>
            <strong>Fib(0) = 0</strong>, <strong>Fib(1) = 1</strong>, and
            <br />
            <strong>Fib(n) = Fib(n-1) + Fib(n-2)</strong> for n &gt; 1.
          </Text>
          <Text mt={2}>
            <strong>Constraints:</strong>
            <ul>
              <li>0 ≤ n ≤ 30</li>
            </ul>
          </Text>
          <Box mt={4}>
            <Text fontWeight="bold">Sample Test Cases:</Text>
            <Stack spacing={2} mt={2}>
              {SAMPLE_INPUTS.map((input, index) => (
                <Button
                  key={index}
                  onClick={() => handleTestCase(index)}
                  colorScheme={selectedTestCase === index ? "blue" : "gray"}
                >
                  Test Case {index + 1}
                </Button>
              ))}
            </Stack>
          </Box>
          <Box mt={4}>
            <Text fontWeight="bold">Sample Input:</Text>
            <Text as="pre">{SAMPLE_INPUTS[selectedTestCase]}</Text>
            <Text mt={2} fontWeight="bold">Expected Output:</Text>
            <Text as="pre">{SAMPLE_OUTPUTS[selectedTestCase]}</Text>
          </Box>
        </Box>

        <VStack w="50%" spacing={4} position="relative" height="70vh">
          <Box w="100%" height="100%">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: { enabled: false },
              }}
              height="100%"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
          <Button
            variant="outline"
            colorScheme="teal"
            mb={4}
            onClick={() => setIsAiSuggestionsVisible(!isAiSuggestionsVisible)}
          >
            {isAiSuggestionsVisible ? "Hide AI Suggestions" : "Show AI Suggestions"}
          </Button>

        </VStack>
      </HStack>
      {isAiSuggestionsVisible && <AiSuggestions editorRef={editorRef} />}
    </Box>
  );
};

export default Problem;
