
import axios from "axios";
import axiosRetry from "axios-retry";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

// Configure axios-retry
axiosRetry(API, {
  retries: 3, // Number of retry attempts
  retryDelay: axiosRetry.exponentialDelay, // Use exponential backoff delay
  retryCondition: (error) => {
    // Retry only if the error is a 429 (Too Many Requests)
    return error.response && error.response.status === 429;
  },
});

export const executeCode = async (language, sourceCode, stdin) => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin,
      run_timeout: 1000,
      run_memory_limit: 512 * 1024 * 1024,
    });
    return response.data;
  } catch (error) {
    // Log error or handle it accordingly
    console.error("Error executing code:", error);
    throw error;
  }
};
