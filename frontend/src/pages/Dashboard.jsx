import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold">User Dashboard</Text>
      <Stack spacing={4} mt={4}>
        <Text>Problems Solved: 25</Text>
        <Text>Current Streak: 5 days</Text>
        <Text>Skill Level: Intermediate</Text>
      </Stack>
    </Box>
  );
};

export default Dashboard;
