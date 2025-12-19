import { Chapter } from '@/types/study-material';
import { Topic } from '@/types/study-material';

const topics: Topic[] = [
  {
    id: 'what-is-data-structure',
    slug: 'what-is-data-structure',
    title: 'What is Data Structure?',
    description: 'Understanding the concept and importance of data structures in programming',
    content: `# What is Data Structure?

A data structure is a specialized format for organizing, processing, retrieving and storing data. There are several basic and advanced types of data structures, all designed to arrange data to suit a specific purpose so that it can be accessed and worked with in appropriate ways.

## Definition
A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

## Key Characteristics
- **Organization**: How data is arranged in memory
- **Access**: How data can be retrieved
- **Manipulation**: How data can be modified
- **Storage**: How data is stored efficiently

## Why Data Structures Matter
Data structures provide a means to manage large amounts of data efficiently. Such uses include:
- Searching for particular data items
- Sorting data items
- Processing data items in a defined order
- Representing database records
- Modeling networks and graphs

## Real-World Examples
- **Arrays**: Like a bookshelf with numbered slots
- **Linked Lists**: Like a treasure hunt where each clue points to the next
- **Trees**: Like organizational charts or family trees
- **Graphs**: Like social networks or road maps

Understanding data structures is fundamental to writing efficient and scalable code.`,
    type: 'document',
    duration: '15 min',
    tags: ['basics', 'introduction', 'concepts'],
    order: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'what-is-algorithm',
    slug: 'what-is-algorithm',
    title: 'What is Algorithm?',
    description: 'Understanding algorithms and their role in problem solving',
    content: `# What is Algorithm?

An algorithm is a step-by-step procedure or formula for solving a problem. In computer science, an algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.

## Definition
An algorithm is a finite set of instructions that, given an initial state and initial input, will produce a defined output and terminate in a finite state.

## Key Properties of Algorithms
- **Finiteness**: Must terminate after a finite number of steps
- **Definiteness**: Each step must be precisely defined
- **Input**: Has zero or more well-defined inputs
- **Output**: Has one or more well-defined outputs
- **Effectiveness**: Each step must be basic enough to be carried out

## Algorithm Examples
- **Recipe**: Step-by-step cooking instructions
- **GPS Navigation**: Finding the shortest route
- **Sorting**: Arranging items in order
- **Search**: Finding specific items in a collection

## Algorithm Design
Good algorithms should be:
- **Correct**: Produce the right output
- **Efficient**: Use minimal resources
- **Clear**: Easy to understand and implement
- **Maintainable**: Easy to modify and extend

Algorithms are the heart of computer science and programming.`,
    type: 'document',
    duration: '15 min',
    tags: ['basics', 'introduction', 'problem-solving'],
    order: 2,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'why-dsa-needed',
    slug: 'why-dsa-needed',
    title: 'Why DSA is Needed',
    description: 'Understanding the importance of data structures and algorithms',
    content: `# Why DSA is Needed

Data Structures and Algorithms (DSA) form the foundation of computer science and are essential for every programmer to master. They enable us to write efficient, scalable, and maintainable code.

## Performance Optimization
- **Speed**: Faster execution of programs
- **Memory**: Efficient use of available memory
- **Scalability**: Handle growing amounts of data
- **Resource Management**: Optimal use of system resources

## Problem Solving
- **Systematic Approach**: Structured way to solve problems
- **Pattern Recognition**: Identify common problem patterns
- **Optimization**: Find the best solution among alternatives
- **Analysis**: Evaluate different approaches

## Real-World Impact
- **Search Engines**: Finding relevant results quickly
- **Social Networks**: Managing billions of connections
- **E-commerce**: Processing millions of transactions
- **Gaming**: Real-time physics and graphics

## Career Benefits
- **Interview Preparation**: Essential for technical interviews
- **Professional Development**: Write better code
- **Problem-Solving Skills**: Enhanced logical thinking
- **Competitive Programming**: Excel in coding competitions

## Industry Applications
- **Database Systems**: Efficient data storage and retrieval
- **Operating Systems**: Resource management and scheduling
- **Artificial Intelligence**: Machine learning algorithms
- **Cryptography**: Security and encryption

Mastering DSA is not just about passing interviews—it's about becoming a better programmer who can solve complex problems efficiently.`,
    type: 'document',
    duration: '20 min',
    tags: ['importance', 'applications', 'career'],
    order: 3,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'real-world-examples',
    slug: 'real-world-examples',
    title: 'Real-world Examples',
    description: 'Practical applications of data structures and algorithms',
    content: `# Real-world Examples

Data structures and algorithms are used everywhere in our daily lives, often without us realizing it.

## Social Media Networks
- **Graphs**: Friend connections, follower relationships
- **Hash Tables**: User profiles and quick lookups
- **Trees**: Comment threads, hierarchical content
- **Algorithms**: News feed ranking, recommendation systems

## Navigation and Maps
- **Graphs**: Road networks, flight routes
- **Shortest Path Algorithms**: GPS navigation (Dijkstra's algorithm)
- **Tries**: Autocomplete for locations
- **Spatial Data Structures**: Efficient location queries

## E-commerce Platforms
- **Arrays**: Product listings, shopping carts
- **Trees**: Product categories, organizational structure
- **Hash Tables**: User accounts, inventory management
- **Search Algorithms**: Product search and filtering

## File Systems
- **Trees**: Directory structure
- **Linked Lists**: File allocation tables
- **Hash Tables**: File metadata caching
- **Compression Algorithms**: File compression

## Music and Video Streaming
- **Queues**: Playlist management
- **Hash Tables**: Song metadata, user preferences
- **Trees**: Genre classification
- **Algorithms**: Recommendation engines

## Banking Systems
- **Arrays**: Transaction records
- **Trees**: Account hierarchy
- **Hash Tables**: Account lookups
- **Sorting Algorithms**: Transaction processing

## Gaming
- **Graphs**: Game maps, network play
- **Trees**: Decision trees, AI behavior
- **Arrays**: Game state, player data
- **Algorithms**: Pathfinding, collision detection

## Healthcare
- **Trees**: Patient records, medical history
- **Graphs**: Disease spread modeling
- **Algorithms**: Diagnostic systems, treatment planning

These examples show how DSA concepts are fundamental to modern technology and problem-solving.`,
    type: 'document',
    duration: '25 min',
    tags: ['applications', 'examples', 'real-world'],
    order: 4,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'logical-problem-approach',
    slug: 'logical-problem-approach',
    title: 'How Problems are Approached Logically',
    description: 'Systematic approach to problem solving in programming',
    content: `# How Problems are Approached Logically

Logical problem solving is a systematic approach to breaking down complex problems into manageable parts and finding efficient solutions.

## Problem Analysis Framework

### 1. Understand the Problem
- **Read Carefully**: Understand all requirements and constraints
- **Identify Inputs**: What data do you have?
- **Identify Outputs**: What should the solution produce?
- **Edge Cases**: Consider special scenarios and boundary conditions

### 2. Break Down the Problem
- **Decomposition**: Split complex problems into smaller subproblems
- **Pattern Recognition**: Identify familiar patterns and structures
- **Abstraction**: Focus on essential details, ignore irrelevant ones
- **Modular Thinking**: Design reusable components

### 3. Choose the Right Tools
- **Data Structures**: Select appropriate structures for your data
- **Algorithms**: Choose algorithms that fit your requirements
- **Trade-offs**: Consider time vs. space complexity
- **Scalability**: Plan for future growth

### 4. Design the Solution
- **Pseudocode**: Write high-level solution outline
- **Flowcharts**: Visualize the solution flow
- **Step-by-Step**: Detailed implementation plan
- **Test Cases**: Plan how to verify correctness

### 5. Implement and Test
- **Incremental Development**: Build and test piece by piece
- **Debugging**: Identify and fix issues systematically
- **Optimization**: Improve performance after correctness
- **Documentation**: Document your approach and decisions

## Logical Thinking Techniques

### Divide and Conquer
- Break problems into smaller, similar subproblems
- Solve subproblems recursively
- Combine solutions to solve the original problem

### Pattern Matching
- Recognize common problem patterns
- Apply known solutions to similar problems
- Adapt solutions to specific requirements

### Abstraction
- Focus on essential properties
- Hide implementation details
- Create reusable components

### Iterative Refinement
- Start with a simple solution
- Gradually improve and optimize
- Handle edge cases and special scenarios

## Common Problem-Solving Patterns

### Two Pointers
- Use multiple pointers to traverse data
- Useful for searching and sorting problems
- Often reduces time complexity

### Sliding Window
- Maintain a window of relevant data
- Useful for subarray/subsequence problems
- Efficient for streaming data

### Greedy Approach
- Make locally optimal choices
- Hope to find global optimum
- Fast but not always correct

### Dynamic Programming
- Break into overlapping subproblems
- Store and reuse solutions
- Optimize recursive solutions

Mastering these logical approaches will make you a more effective problem solver and programmer.`,
    type: 'document',
    duration: '30 min',
    tags: ['problem-solving', 'logic', 'methodology'],
    order: 5,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const introductionDSA: Chapter = {
  id: 'introduction-dsa',
  slug: 'introduction-dsa',
  title: 'Introduction to DSA & Problem Solving',
  description: 'Fundamental concepts of data structures, algorithms, and problem-solving approaches',
  order: 1,
  topics,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
};
