export type PageTab = 'main' | 'cpr' | 'grxabcde' | 'aed' | 'contacts' | 'about';

export interface StudentMember {
  name: string;
  role: string;
  grade: string;
  studentId: string;
  avatarText: string;
  bio: string;
  skills: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
