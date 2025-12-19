import { Chapter, Topic } from '@/types/study-material';

const topics: Topic[] = [
  {
    id: 'stack-vs-heap',
    slug: 'stack-vs-heap',
    title: 'Stack vs Heap Memory',
    description: 'Two memory “rooms” with different rules.',
    content: `# Stack vs Heap Memory

Imagine memory as a house:
- **Stack** is the *neat desk*: fast, automatic, but limited space.
- **Heap** is the *storage room*: bigger, flexible, but you must manage it.

## Stack
- Stores function calls and local variables
- Very fast (push/pop)
- Freed automatically when function ends

## Heap
- Used for dynamic allocations (objects, arrays that live longer)
- Slightly slower
- In many languages: managed by garbage collector

## DSA connection
Recursion uses stack frames. Deep recursion → stack overflow.
`,
    type: 'document',
    duration: '12 min',
    tags: ['memory', 'stack', 'heap'],
    order: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'how-variables-stored',
    slug: 'how-variables-stored',
    title: 'How Variables are Stored',
    description: 'Values, references, and what really gets copied.',
    content: `# How Variables are Stored

Different languages store things differently, but the *idea* is similar.

## Value types
When you assign \`a = 5\`, the value is stored directly.

## Reference types
When you create an object/array, a variable often stores a *reference (address)* to data on the heap.

## Why it matters in DSA
- Copying an array can cost \`O(n)\`
- Passing references can be \`O(1)\` but mutations affect the original

A lot of bugs are just “I thought I copied it, but I only copied the reference.”
`,
    type: 'document',
    duration: '10 min',
    tags: ['memory', 'reference'],
    order: 2,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'pointers-and-references',
    slug: 'pointers-and-references',
    title: 'Pointers & References (Conceptual)',
    description: 'Even if you don’t use C/C++, you need the concept.',
    content: `# Pointers & References (Conceptual)

A **pointer** is like a paper slip with a room number written on it.
The room contains the actual data.

A **reference** is like a nickname for the same room.

## Why you should care
Many data structures are built from “nodes pointing to nodes”:
- Linked Lists
- Trees
- Graphs

Even if the language hides pointers, the structure still behaves like pointer-based data.
`,
    type: 'document',
    duration: '10 min',
    tags: ['memory', 'pointers'],
    order: 3,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'static-vs-dynamic-allocation-call-stack',
    slug: 'static-vs-dynamic-allocation-call-stack',
    title: 'Static vs Dynamic Allocation & Call Stack',
    description: 'What happens when functions call functions.',
    content: `# Static vs Dynamic Allocation & Call Stack

## Static allocation
Memory decided at compile time (fixed-size).

## Dynamic allocation
Memory decided at runtime (flexible).

## Call stack behavior
Each function call adds a *stack frame*:
- parameters
- local variables
- return address

Deep recursion = many frames.
If frames exceed stack memory → **stack overflow**.

This is why some DFS solutions need iterative stacks.
`,
    type: 'document',
    duration: '14 min',
    tags: ['memory', 'call-stack'],
    order: 4,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const memoryDataRepresentation: Chapter = {
  id: 'memory-data-representation',
  slug: 'memory-data-representation',
  title: 'Memory & Data Representation',
  description: 'Learn how memory works so data structures feel intuitive, not magical.',
  order: 4,
  topics,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
};
