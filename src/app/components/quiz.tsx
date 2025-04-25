"use client";

import { useState } from "react";

const initialQuestions = [
  {
    question: "Which blockchain will Pacific DeFi initially operate on?",
    options: ["Ethereum", "Binance Smart Chain", "Polygon", "Solana"],
    correct: 1,
  },
  {
    question: "What is the mission of Pacific DeFi?",
    options: [
      "Replace banks with DeFi platforms",
      "Offer meme coin trading",
      "Provide secure yield products for stablecoins and altcoins",
      "Create a decentralized gaming ecosystem",
    ],
    correct: 2,
  },
  {
    question:
      "What percentage of PACIFIC tokens is allocated to the liquidity pool rewards?",
    options: ["10%", "20%", "30%", "40%"],
    correct: 2,
  },
  {
    question: "Which feature is **not** part of Pacific DeFi’s product suite?",
    options: [
      "Lending & borrowing",
      "Auto-staking vaults",
      "NFT marketplace",
      "Token swap platform",
    ],
    correct: 2,
  },
  {
    question:
      "What is a key benefit of single-token auto-staking in Pacific DeFi?",
    options: [
      "Requires multi-token deposits",
      "Provides yield and spreads risk",
      "Only supports Ethereum-based tokens",
      "Generates NFTs as rewards",
    ],
    correct: 1,
  },
  {
    question: "Which network will Pacific DeFi **not** initially support?",
    options: [
      "Binance Smart Chain",
      "KuCoin Community Chain",
      "Polygon",
      "Cardano",
    ],
    correct: 3,
  },
  {
    question:
      "What percentage of profits will Pacific DeFi commit to environmental efforts?",
    options: ["1%", "2%", "5%", "10%"],
    correct: 1,
  },
  {
    question: "What is the total supply of the PACIFIC token?",
    options: ["10,000,000", "50,000,000", "100,000,000", "500,000,000"],
    correct: 2,
  },
  {
    question:
      "What type of vault in Pacific DeFi has a 3% withdrawal and 10% auto-compound fee?",
    options: [
      "Single Vault: PACIFIC",
      "Time-locked Vaults",
      "Polygon Staking Vault",
      "NFT Farming Vault",
    ],
    correct: 0,
  },
  {
    question: "Which development phase introduces the mobile app?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Post-launch"],
    correct: 2,
  },
];
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Quiz() {
  const [questions, setQuestions] = useState(() =>
    shuffleArray(initialQuestions)
  );
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (index: number) => {
    if (!answered) {
      setSelected(index);
      setAnswered(true);
    }
  };

  const nextQuestion = () => {
    setCurrent((prev) => prev + 1);
    setSelected(null);
    setAnswered(false);
  };

  const resetQuiz = () => {
    setQuestions(shuffleArray(initialQuestions));
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
  };

  const currentQuestion = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-semibold">
          Bodyweight vs. Barbells: Which Training Method is Best for You?
        </h1>
        <div className="flex gap-2 text-sm">
          <button onClick={resetQuiz} className="text-gray-500 hover:underline">
            Reset
          </button>
          <button onClick={resetQuiz} className="text-gray-500 hover:underline">
            Shuffle questions
          </button>
        </div>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <p className="text-lg font-medium mb-2">Question {current + 1}</p>
        <p className="mb-4">{currentQuestion.question}</p>
        <div className="space-y-2">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left p-2 rounded border ${
                answered
                  ? i === currentQuestion.correct
                    ? "border-green-500 bg-green-50"
                    : i === selected
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200"
                  : "border-gray-200 hover:bg-gray-100"
              }`}
              disabled={answered}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Question {current + 1} of {questions.length}
        </p>
        {answered && current < questions.length - 1 && (
          <button
            onClick={nextQuestion}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
