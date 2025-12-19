export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  type: 'document' | 'video' | 'quiz' | 'assignment' | 'presentation';
  duration?: string;
  fileSize?: string;
  downloadUrl?: string;
  thumbnailUrl?: string;
  tags: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  topics: Topic[];
  createdAt: string;
  updatedAt: string;
}

export interface Subject {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  chapters: Chapter[];
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  thumbnailUrl?: string;
  subjects: Subject[];
  createdAt: string;
  updatedAt: string;
}

export interface StudyMaterialCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

// Legacy interfaces for backward compatibility
export interface StudyMaterial {
  id: string;
  slug: string;
  title: string;
  description: string;
  course: string;
  category: string;
  type: 'document' | 'video' | 'quiz' | 'assignment' | 'presentation';
  content: string;
  order: number;
  duration?: string;
  fileSize?: string;
  downloadUrl?: string;
  thumbnailUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
