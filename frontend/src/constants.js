export const LANGUAGE_VERSIONS = {
  c: "10.2.0",
  cpp: "10.2.0",
  python: "3.10.0",
  java: "15.0.2",
  javascript: "18.15.0",
  typescript: "5.0.3",
  csharp: "6.12.0",
  php: "8.2.3",
  };

export const CODE_SNIPPETS = {
  c: `#include <stdio.h>\n\nint main() {\n\tchar name[] = "CODEBUZZ";\n\tprintf("Hello, %s!\\n", name);\n\treturn 0;\n}\n`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\tstring name = "CODEBUZZ";\n\tcout << "Hello, " << name << "!" << endl;\n\treturn 0;\n}\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("CODEBUZZ")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("CODEBUZZ");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "CODEBUZZ" });\n`,
    csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'CODEBUZZ';\necho $name;\n",
  };

  export const SAMPLE_INPUTS = [
    "5", 
    "10",
    "15",
  ];
  
  export const SAMPLE_OUTPUTS = [
    "5",  
    "55", 
    "610", 
  ];

  export const PROBLEMS = [
    { title: 'Fibonacci Sequence', description: 'Find the nth Fibonacci number.', path: true },
    { title: 'Binary Search', description: 'Implement binary search on a sorted array.', path: false },
    { title: 'Two Sum', description: 'Find two numbers that add up to a specific target.', path: true },
    { title: 'Reverse a String', description: 'Reverse the given string.', path: false },
    { title: 'Merge Two Sorted Lists', description: 'Merge two sorted linked lists.', path: true },
    { title: 'Maximum Subarray', description: 'Find the contiguous subarray with the largest sum.', path: false },
    { title: 'Valid Parentheses', description: 'Check if the parentheses are valid.', path: true },
    { title: 'Climbing Stairs', description: 'Calculate the number of ways to climb n stairs.', path: false },
    { title: 'Product of Array Except Self', description: 'Calculate the product of array elements except self.', path: true },
    { title: 'Best Time to Buy and Sell Stock', description: 'Determine the maximum profit from stock prices.', path: false },
    { title: 'Remove Duplicates from Sorted Array', description: 'Remove duplicates in-place and return new length.', path: true },
    { title: 'Minimum Depth of Binary Tree', description: 'Find the minimum depth of a binary tree.', path: false },
    { title: 'Rotate Array', description: 'Rotate an array to the right by k steps.', path: true },
    { title: 'Maximum Product Subarray', description: 'Find the contiguous subarray with the maximum product.', path: false },
    { title: 'Word Search', description: 'Determine if a word exists in a 2D board.', path: true },
    { title: 'Search in Rotated Sorted Array', description: 'Search for a target in a rotated sorted array.', path: false },
    { title: 'Longest Common Prefix', description: 'Find the longest common prefix string amongst an array of strings.', path: true },
    { title: 'Kth Largest Element in an Array', description: 'Find the kth largest element in an unsorted array.', path: false },
    { title: 'Binary Tree Inorder Traversal', description: 'Perform inorder traversal of a binary tree.', path: true },
    { title: 'Number of Islands', description: 'Count the number of islands in a 2D grid.', path: false },
    { title: 'Find First and Last Position of Element in Sorted Array', description: 'Find the starting and ending position of a given target.', path: true },
  ];
  
  export const LEARNING_PATHS = [
    { title: 'Beginner Coder Track', description: 'Learn basic programming concepts and problem-solving techniques.' },
    { title: 'Competitive Programming Track', description: 'Enhance your skills in algorithms and data structures for competitive programming.' },
    { title: 'Interview Preparation Track', description: 'Prepare for coding interviews with common interview questions and patterns.' },
    { title: 'Data Structures and Algorithms Track', description: 'Deep dive into essential data structures and algorithms.' },
  ];
  