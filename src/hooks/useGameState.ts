import { useState, useCallback, useEffect } from 'react';
import { GameState, Question } from '../types/game';
import { questions } from '../data/questions';

const initialState: GameState = {
  currentScreen: 'welcome',
  playerName: '',
  currentPosition: 1,
  score: 0,
  currentQuestion: null,
  showQuestion: false,
  timeLeft: 30,
  gameStarted: false,
  isRolling: false,
  lastRoll: 0,
  soundEnabled: true,
};

// Increased quiz cells from 8 to 16 for more educational opportunities
const questionCells = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 7, 14, 28, 35].sort((a, b) => a - b);

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [usedQuestions, setUsedQuestions] = useState<number[]>([]);

  const playSound = useCallback((type: 'dice' | 'move' | 'correct' | 'wrong' | 'victory') => {
    if (!gameState.soundEnabled) return;
    
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch (type) {
      case 'dice':
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        break;
      case 'move':
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(600, audioContext.currentTime + 0.2);
        break;
      case 'correct':
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
        break;
      case 'wrong':
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.2);
        break;
      case 'victory':
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2);
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.4);
        oscillator.frequency.setValueAtTime(1047, audioContext.currentTime + 0.6);
        break;
    }
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  }, [gameState.soundEnabled]);

  // Probabilistic dice roll with educational nudging
  const generateSmartDiceRoll = useCallback((currentPosition: number) => {
    const randomRoll = Math.floor(Math.random() * 6) + 1;
    const potentialNewPosition = Math.min(currentPosition + randomRoll, 36);
    
    // If the random roll already lands on a question cell, use it
    if (questionCells.includes(potentialNewPosition)) {
      return randomRoll;
    }
    
    // Find reachable question cells within dice range (1-6)
    const reachableQuestionCells = questionCells.filter(cell => 
      cell > currentPosition && cell <= currentPosition + 6
    );
    
    // If no question cells are reachable, use random roll
    if (reachableQuestionCells.length === 0) {
      return randomRoll;
    }
    
    // Apply probabilistic nudging (70% chance to nudge toward question cell)
    const shouldNudge = Math.random() < 0.7;
    
    if (shouldNudge) {
      // Choose the closest reachable question cell
      const targetQuestionCell = reachableQuestionCells[0];
      const requiredRoll = targetQuestionCell - currentPosition;
      
      // Ensure the required roll is valid (1-6)
      if (requiredRoll >= 1 && requiredRoll <= 6) {
        return requiredRoll;
      }
    }
    
    // Fallback to random roll (30% chance or if nudging isn't possible)
    return randomRoll;
  }, []);

  const startGame = useCallback((playerName: string) => {
    setGameState(prev => ({
      ...prev,
      playerName,
      currentScreen: 'tutorial',
    }));
  }, []);

  const startGameplay = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'game',
      gameStarted: true,
    }));
  }, []);

  const rollDice = useCallback(() => {
    if (gameState.isRolling) return;
    
    setGameState(prev => ({ ...prev, isRolling: true }));
    playSound('dice');
    
    // Simulate dice roll animation
    setTimeout(() => {
      const roll = generateSmartDiceRoll(gameState.currentPosition);
      const newPosition = Math.min(gameState.currentPosition + roll, 36);
      
      setGameState(prev => ({
        ...prev,
        isRolling: false,
        lastRoll: roll,
        currentPosition: newPosition,
      }));
      
      playSound('move');
      
      // Check if landed on question cell
      if (questionCells.includes(newPosition)) {
        setTimeout(() => {
          const availableQuestions = questions.filter(q => !usedQuestions.includes(q.id));
          if (availableQuestions.length > 0) {
            const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
            setGameState(prev => ({
              ...prev,
              currentQuestion: randomQuestion,
              showQuestion: true,
              timeLeft: 30,
            }));
          }
        }, 1000);
      }
      
      // Check if game is finished
      if (newPosition === 36) {
        setTimeout(() => {
          playSound('victory');
          setGameState(prev => ({ ...prev, currentScreen: 'gameOver' }));
        }, 2000);
      }
    }, 1000);
  }, [gameState.isRolling, gameState.currentPosition, usedQuestions, playSound, generateSmartDiceRoll]);

  const answerQuestion = useCallback((answerIndex: number) => {
    if (!gameState.currentQuestion) return;
    
    const isCorrect = answerIndex === gameState.currentQuestion.correctAnswer;
    
    if (isCorrect) {
      playSound('correct');
      setGameState(prev => ({
        ...prev,
        score: prev.score + 10,
        showQuestion: false,
        currentQuestion: null,
      }));
    } else {
      playSound('wrong');
      setGameState(prev => ({
        ...prev,
        showQuestion: false,
        currentQuestion: null,
      }));
    }
    
    setUsedQuestions(prev => [...prev, gameState.currentQuestion!.id]);
  }, [gameState.currentQuestion, playSound]);

  const resetGame = useCallback(() => {
    setGameState(initialState);
    setUsedQuestions([]);
  }, []);

  const toggleSound = useCallback(() => {
    setGameState(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameState.showQuestion && gameState.timeLeft > 0) {
      interval = setInterval(() => {
        setGameState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (gameState.showQuestion && gameState.timeLeft === 0) {
      // Time's up
      playSound('wrong');
      setGameState(prev => ({
        ...prev,
        showQuestion: false,
        currentQuestion: null,
      }));
      if (gameState.currentQuestion) {
        setUsedQuestions(prev => [...prev, gameState.currentQuestion!.id]);
      }
    }
    
    return () => clearInterval(interval);
  }, [gameState.showQuestion, gameState.timeLeft, gameState.currentQuestion, playSound]);

  return {
    gameState,
    startGame,
    startGameplay,
    rollDice,
    answerQuestion,
    resetGame,
    toggleSound,
  };
};