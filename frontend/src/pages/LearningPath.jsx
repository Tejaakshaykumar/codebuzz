import React from 'react';
import { Box, Text, Stack, Button } from '@chakra-ui/react';
import { LEARNING_PATHS } from '../constants';

const LearningPath = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold">Learning Paths</Text>
      <Stack spacing={4} mt={4}>
        {LEARNING_PATHS.map((path, index) => (
          <Box key={index} p={4} border="1px" borderColor="gray.200">
            <Text fontWeight="bold">{path.title}</Text>
            <Text>{path.description}</Text>
            <Button colorScheme="teal" mt={2}>Start Learning</Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default LearningPath;
