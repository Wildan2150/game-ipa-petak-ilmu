import React from 'react';
import { useGameState } from './hooks/useGameState';
import { WelcomeScreen } from './components/WelcomeScreen';
import { TutorialModal } from './components/TutorialModal';
import { GameHeader } from './components/GameHeader';
import { GameBoard } from './components/GameBoard';
import { DiceRoller } from './components/DiceRoller';
import { QuestionModal } from './components/QuestionModal';
import { GameOverScreen } from './components/GameOverScreen';

function App() {
  const {
    gameState,
    startGame,
    startGameplay,
    rollDice,
    answerQuestion,
    resetGame,
    toggleSound,
  } = useGameState();

  // Welcome Screen
  if (gameState.currentScreen === 'welcome') {
    return (
      <WelcomeScreen
        onStart={startGame}
        soundEnabled={gameState.soundEnabled}
        onToggleSound={toggleSound}
      />
    );
  }

  // Game Over Screen
  if (gameState.currentScreen === 'gameOver') {
    return (
      <GameOverScreen
        playerName={gameState.playerName}
        score={gameState.score}
        onRestart={resetGame}
      />
    );
  }

  // Main Game Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Tutorial Modal */}
        {gameState.currentScreen === 'tutorial' && (
          <TutorialModal onClose={startGameplay} />
        )}

        {/* Game Header */}
        <GameHeader
          playerName={gameState.playerName}
          currentPosition={gameState.currentPosition}
          score={gameState.score}
          soundEnabled={gameState.soundEnabled}
          onToggleSound={toggleSound}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Game Board */}
          <div className="lg:col-span-2">
            <GameBoard
              currentPosition={gameState.currentPosition}
              isRolling={gameState.isRolling}
            />
          </div>

          {/* Dice Roller */}
          <div className="lg:col-span-1">
            <DiceRoller
              onRoll={rollDice}
              isRolling={gameState.isRolling}
              lastRoll={gameState.lastRoll}
              disabled={gameState.showQuestion}
            />
          </div>
        </div>

        {/* Question Modal */}
        {gameState.showQuestion && gameState.currentQuestion && (
          <QuestionModal
            question={gameState.currentQuestion}
            timeLeft={gameState.timeLeft}
            onAnswer={answerQuestion}
          />
        )}
      </div>
    </div>
  );
}

export default App;