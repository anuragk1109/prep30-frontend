import { StudyMaterial, Course, StudyMaterialCategory } from '@/types/study-material';

export const studyMaterialCategories: StudyMaterialCategory[] = [
  {
    id: '1',
    name: 'Documents',
    description: 'PDF files, notes, and text-based materials',
    icon: '📄'
  },
  {
    id: '2',
    name: 'Videos',
    description: 'Video lectures and tutorials',
    icon: '🎥'
  },
  {
    id: '3',
    name: 'Quizzes',
    description: 'Practice tests and assessments',
    icon: '📝'
  },
  {
    id: '4',
    name: 'Assignments',
    description: 'Homework and project assignments',
    icon: '📚'
  },
  {
    id: '5',
    name: 'Presentations',
    description: 'Slides and presentation materials',
    icon: '📊'
  }
];

export const courses: Course[] = [
  {
    id: '1',
    slug: 'iit-jee',
    title: 'IIT JEE Preparation',
    description: 'Complete study materials for IIT JEE entrance examination',
    instructor: 'Expert Faculty',
    duration: '12 months',
    level: 'advanced',
    studyMaterials: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '2',
    slug: 'neet',
    title: 'NEET Preparation',
    description: 'Comprehensive study materials for NEET medical entrance',
    instructor: 'Medical Experts',
    duration: '12 months',
    level: 'advanced',
    studyMaterials: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '3',
    slug: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master DSA for coding interviews and competitive programming',
    instructor: 'Programming Experts',
    duration: '6 months',
    level: 'intermediate',
    studyMaterials: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '4',
    slug: 'aws',
    title: 'AWS Cloud Certification',
    description: 'Complete AWS certification preparation materials',
    instructor: 'Cloud Experts',
    duration: '3 months',
    level: 'intermediate',
    studyMaterials: [],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const studyMaterials: StudyMaterial[] = [
  // Add your study materials here when you provide the content
];

// Helper function to get study materials by course slug
export const getStudyMaterialsByCourse = (courseSlug: string): StudyMaterial[] => {
  return studyMaterials.filter(material => material.course === courseSlug);
};

// Helper function to get study material by slug
export const getStudyMaterialBySlug = (slug: string): StudyMaterial | undefined => {
  return studyMaterials.find(material => material.slug === slug);
};

// Helper function to get course by slug
export const getCourseBySlug = (courseSlug: string): Course | undefined => {
  return courses.find(course => course.slug === courseSlug);
};
