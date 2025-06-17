export interface Question {
  id: number;
  category: 'Produsen' | 'Konsumen' | 'Dekomposer';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GameState {
  currentScreen: 'welcome' | 'tutorial' | 'game' | 'gameOver';
  playerName: string;
  currentPosition: number;
  score: number;
  currentQuestion: Question | null;
  showQuestion: boolean;
  timeLeft: number;
  gameStarted: boolean;
  isRolling: boolean;
  lastRoll: number;
  soundEnabled: boolean;
}

export interface CellData {
  id: number;
  isQuestionCell: boolean;
  icon?: string;
  color?: string;
}