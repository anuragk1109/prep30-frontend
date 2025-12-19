import { Subject } from '@/types/study-material';
import { introductionDSA } from '@/data/courses/dsa/foundations/chapters/introduction-dsa';
import { asymptoticAnalysis } from '@/data/courses/dsa/foundations/chapters/asymptotic-analysis-new';
import { mathematicalFoundations } from '@/data/courses/dsa/foundations/chapters/mathematical-foundations';
import { memoryDataRepresentation } from '@/data/courses/dsa/foundations/chapters/memory-data-representation';

export const foundations: Subject = {
  id: 'foundations',
  slug: 'foundations',
  title: 'Foundations of DSA',
  description: 'Introduction to data structures and algorithms, problem-solving approaches, and basic concepts',
  order: 1,
  chapters: [
    introductionDSA,
    asymptoticAnalysis,
    mathematicalFoundations,
    memoryDataRepresentation
  ],
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01'
};
