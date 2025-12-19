import { Chapter, Topic } from '@/types/study-material';

const topics: Topic[] = [
  {
    id: 'time-complexity',
    slug: 'time-complexity',
    title: 'Time Complexity',
    description: 'Measuring how runtime grows as input size grows.',
    content: `# Time Complexity

Time complexity answers: **"If input doubles, how does my work change?"**

## Mental model
Imagine your program is a worker.
- O(n) → checks each item once.
- O(n^2) → compares every pair of items.
- O(log n) → keeps cutting work in half.
`,
    type: 'document',
    duration: '12 min',
    tags: ['complexity', 'time'],
    order: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'space-complexity',
    slug: 'space-complexity',
    title: 'Space Complexity',
    description: 'How much extra memory your approach needs.',
    content: `# Space Complexity

Space complexity is the **extra** memory used (not counting input itself).

## Examples
- Two-pointer on array: O(1) extra space
- Hash map for frequency: O(n)
- Recursion call stack: O(depth)
`,
    type: 'document',
    duration: '10 min',
    tags: ['complexity', 'space'],
    order: 2,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'big-o-omega-theta',
    slug: 'big-o-omega-theta',
    title: 'Big-O, Big-Ω, Big-Θ',
    description: 'Upper bound, lower bound, and tight bound — without scary math.',
    content: `# Big-O, Big-Ω, Big-Θ

Think of them as promises about performance.

## Big-O (Upper bound)
"I will not be slower than this growth."
- Example: merge sort is O(n log n).

## Big-Ω (Lower bound)
"I cannot be faster than this growth."
- Example: comparison-based sorting is Ω(n log n).

## Big-Θ (Tight bound)
"This is the real growth — both upper and lower match."
- Example: merge sort is Θ(n log n).
`,
    type: 'document',
    duration: '12 min',
    tags: ['complexity', 'big-o'],
    order: 3,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'best-average-worst-amortized',
    slug: 'best-average-worst-amortized',
    title: 'Best, Average, Worst & Amortized',
    description: 'Why arrays feel O(1) to append (most of the time).',
    content: `# Best, Average, Worst & Amortized

## Best / Average / Worst
Same algorithm, different inputs.
- Linear search:
  - Best: first element → O(1)
  - Worst: last element → O(n)

## Amortized analysis
Sometimes an operation is *occasionally expensive* but *usually cheap*.

### Example: dynamic arrays
Appending is usually O(1).
But sometimes the array grows and copies all elements: O(n).
Over many appends, the average cost per append is still O(1) → **amortized O(1)**.
`,
    type: 'document',
    duration: '14 min',
    tags: ['complexity', 'amortized'],
    order: 4,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const asymptoticAnalysis: Chapter = {
  id: 'asymptotic-analysis',
  slug: 'asymptotic-analysis',
  title: 'Asymptotic Analysis',
  description: 'Understand time/space complexity and asymptotic notations in a practical way.',
  order: 3,
  topics,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
};
