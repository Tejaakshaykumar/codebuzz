import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Problem from "./components/Problem";
import AiSuggestions from "./components/AiSuggestions";
import Output from "./components/Output";
import Home from "./pages/Home";
import AllProblems from "./pages/AllProblems";
import Dashboard from "./pages/Dashboard";
import LearningPath from "./pages/LearningPath";
import PathProblemSet from "./pages/PathProblemSet";
function App() {
  return (
    <Router>
      <Box minH="100vh" bg="#000000" color="gray.500" px={6} py={8}>
        <Routes>
          <Route path="/p" element={<Problem />} />          
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllProblems />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/lp" element={<LearningPath />} />
          <Route path="/pps" element={<PathProblemSet />} />

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
