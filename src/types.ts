export type PageTab = 'main' | 'cpr' | 'grxabcde' | 'aed' | 'contacts' | 'about';

export interface StudentMember {
  name: string;
  grade: string;
  studentNo: string;
  no: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
