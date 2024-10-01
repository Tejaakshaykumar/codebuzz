import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box textAlign="center" p={4}>
      <Text fontSize="2xl" fontWeight="bold">Welcome to CODEBUZZ : Coding Platform</Text>
      <Text mt={4}>Discover problems, learn coding, and improve your skills!</Text>
      <Button colorScheme="teal" mt={4}>Get Started</Button>
    </Box>
  );
};

export default Home;
