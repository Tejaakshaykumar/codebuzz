import { useState } from "react";
import { Box, HStack, Button, Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { executeCode } from "../api";
import { SAMPLE_INPUTS, SAMPLE_OUTPUTS } from "../constants";

const Output = ({ editorRef, language }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [outputs, setOutputs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedTestCase, setSelectedTestCase] = useState(0);
  const [Code, setCode] = useState(''); // State to store sourceCode

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
        setCode(sourceCode);
    try {
      setIsLoading(true);
      setIsError(false);

      const results = [];
      for (let i = 0; i < SAMPLE_INPUTS.length; i++) {
        const input = SAMPLE_INPUTS[i];
        try {
          const { run: result } = await executeCode(language, sourceCode, input);
          results.push(result);
          await delay(1000);
        } catch (err) {
          console.error("Error executing code:", err);
          toast({
            title: "An error occurred.",
            description: err.message || "Unable to run code",
            status: "error",
            duration: 6000,
          });
          setIsError(true);
          return;
        }
      }

      const formattedOutputs = results.map(result => ({
        stdout: result.output.split("\n"),
        stderr: result.stderr,
      }));

      setOutputs(formattedOutputs);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestCase = (index) => {
    setSelectedTestCase(index);
  };

  return (
    <Box w="100%" height="100%" style={{marginTop:"15vh"}}>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
        float="right"
      >
        Run Code
      </Button>
      <Box mt={4}>
        <HStack spacing={2} mt={2}>
          {SAMPLE_INPUTS.map((input, index) => (
            <Button
              key={index}
              onClick={() => handleTestCase(index)}
              colorScheme={selectedTestCase === index ? "blue" : "gray"}
            >
              Test Case {index + 1}
            </Button>
          ))}
        </HStack>
      </Box>
      <Box mt={4}>
        <Text fontWeight="bold">Sample Input:</Text>
        <Text as="pre">{SAMPLE_INPUTS[selectedTestCase]}</Text>
        <Text mt={2} fontWeight="bold">Expected Output:</Text>
        <Text as="pre">{SAMPLE_OUTPUTS[selectedTestCase]}</Text>
        <Text mt={2} fontWeight="bold">Actual Output:</Text>
        <Text as="pre">
          {outputs[selectedTestCase]
            ? outputs[selectedTestCase].stdout.join("\n")
            : "No output yet"}
        </Text>
        {isError && <Text color="red.500">Error running this test case</Text>}
      </Box>
    </Box>
  );
};

export default Output;
