import React from 'react';
import { Box, Text, Stack, Button } from '@chakra-ui/react';
import { PROBLEMS } from '../constants';

const AllProblems = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold">Explore Problems</Text>
      <Stack spacing={4} mt={4}>
        {PROBLEMS.map((problem, index) => (
          <Box key={index} p={4} border="1px" borderColor="gray.200">
            <Text fontWeight="bold">{problem.title}</Text>
            <Text>{problem.description}</Text>
            <Button colorScheme="teal" mt={2}>View Problem</Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AllProblems;
