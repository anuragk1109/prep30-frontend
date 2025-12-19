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

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  thumbnailUrl?: string;
  studyMaterials: StudyMaterial[];
  createdAt: string;
  updatedAt: string;
}

export interface StudyMaterialCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}
