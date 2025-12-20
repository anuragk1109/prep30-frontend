interface QuizResult {
  id: string;
  quizTitle: string;
  courseName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: string;
  date: string;
  percentage: number;
}

interface QuizResultsResponse {
  message: string;
  results: QuizResult[];
}

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prep30-backend.onrender.com').replace(/\/$/, '');

export const getUserQuizResults = async (userId: string, token: string): Promise<QuizResult[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${userId}/quiz-results`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to fetch quiz results with status ${response.status}`);
    }

    const data = await response.json().catch(() => null);

    if (Array.isArray(data)) {
      return data as QuizResult[];
    }

    if (data && typeof data === 'object') {
      const maybeResults = (data as any).results;
      if (Array.isArray(maybeResults)) {
        return maybeResults as QuizResult[];
      }

      const maybeData = (data as any).data;
      if (Array.isArray(maybeData)) {
        return maybeData as QuizResult[];
      }
    }

    return [];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error while fetching quiz results');
  }
};

export const getUserStats = async (userId: string, token: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/${userId}/stats`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to fetch user stats with status ${response.status}`);
    }

    return await response.json().catch(() => ({}));
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error while fetching user stats');
  }
};
