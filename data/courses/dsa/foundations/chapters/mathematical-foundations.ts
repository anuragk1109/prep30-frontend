import { Chapter, Topic } from '@/types/study-material';

const topics: Topic[] = [
  {
    id: 'basic-math-for-dsa',
    slug: 'basic-math-for-dsa',
    title: 'Basic Math for DSA',
    description: 'The math you actually use again and again while solving problems.',
    content: `# Basic Math for DSA

Think of math in DSA like a *toolbox*. You don't need every tool every day — but you must know the common ones.

## What you'll use most
- Counting and simple equations
- Remainders (\`mod\`) and divisibility
- Ratios, averages, and bounds
- Powers of 2 (binary world)

## Why it matters
When constraints say \`n ≤ 10^5\`, you're silently doing math:
- "Can I do \`n^2\`?" → \`10^10\` operations (too slow)
- "Can I do \`n log n\`?" → around \`10^5 * 17\` (fine)

## Quick habit
When you read a problem:
1. Note max \`n\`
2. Estimate time budget (~\`10^8\` ops)
3. Decide the complexity you need
`,
    type: 'document',
    duration: '12 min',
    tags: ['math', 'basics'],
    order: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'logarithms',
    slug: 'logarithms',
    title: 'Logarithms',
    description: 'Why binary search and balanced trees keep showing up as log(n).',
    content: `# Logarithms

A log answers: **“How many times can I divide by something until I reach 1?”**

## Intuition
If you keep halving:
- 16 → 8 → 4 → 2 → 1 (4 steps)
So \`log2(16) = 4\`.

## DSA connection
- Binary Search: each step halves the search space → \`O(log n)\`
- Balanced BST operations → \`O(log n)\`

## Useful fact
Changing base doesn't matter for Big-O:
\`log2(n)\` and \`log10(n)\` differ by a constant factor.
`,
    type: 'document',
    duration: '10 min',
    tags: ['math', 'log'],
    order: 2,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'exponents-and-powers',
    slug: 'exponents-and-powers',
    title: 'Exponents & Powers',
    description: 'Exponential growth is why brute force dies quickly.',
    content: `# Exponents & Powers

Powers describe *growth*. In DSA, they often warn you: **“Don’t brute force this.”**

## Examples
- \`2^n\`: subsets, choices, yes/no decisions
- \`3^n\`: more branching in recursion

## Why it's scary
\`2^30\` is about **1 billion**.
So problems with \`n = 30\` can be borderline even with bit tricks.

## Good news
Sometimes we reduce exponential to polynomial using:
- Dynamic Programming
- Pruning (backtracking)
- Meet-in-the-middle
`,
    type: 'document',
    duration: '10 min',
    tags: ['math', 'exponent'],
    order: 3,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: 'ap-gp-growth-of-functions',
    slug: 'ap-gp-growth-of-functions',
    title: 'AP, GP & Growth of Functions',
    description: 'Sequences show up in loops, recurrences, and complexity proofs.',
    content: `# AP, GP & Growth of Functions

## Arithmetic Progression (AP)
Same difference each time: \`1, 3, 5, 7...\`
- Sum of 1..n = \`n(n+1)/2\` → explains why nested loops can become \`O(n^2)\`.

## Geometric Progression (GP)
Same ratio each time: \`1, 2, 4, 8...\`
- Appears in divide-and-conquer and halving processes.
## Growth of functions (cheat sheet)
Fastest to slowest (best to worst):
- \`O(1)\`
- \`O(log n)\`
- \`O(n)\`
- \`O(n log n)\`
- \`O(n^2)\`
- \`O(2^n)\`

If your solution is near the bottom, constraints must be tiny.
`,
    type: 'document',
    duration: '14 min',
    tags: ['math', 'ap', 'gp', 'complexity'],
    order: 4,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const mathematicalFoundations: Chapter = {
  id: 'mathematical-foundations',
  slug: 'mathematical-foundations',
  title: 'Mathematical Foundations',
  description: 'The essential math concepts used in algorithm analysis and problem solving.',
  order: 2,
  topics,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
};
