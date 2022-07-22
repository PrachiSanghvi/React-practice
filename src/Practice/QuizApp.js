import React ,{useState} from 'react'

const QuizApp = () => {
  const question = [
  {
    questionText : 'What is the capital of France?',
    answerOptions : [
      { answerText : 'new york' , isCorrect : false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false }
    ]
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false }
    ]
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false }
    ]
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true }
    ]
  }]

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [showScore,setShowScore] = useState(false);
  const [score,setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score+1)
    }
    const nextQuestion = currentQuestion + 1 ;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
       {showScore ? <div className="score-section">You score {score} out of {question.length}</div>:
        <>
          <div className="question-section">
            <div className="question-count">
              <span>QUestion {currentQuestion +1}</span>/{question.length}
            </div>
            <div className="question-text">
              {question[currentQuestion].questionText}
            </div>
            <div className="answer-section">
              {question[currentQuestion].answerOptions.map((val) => (
                <button onClick={() => handleAnswerButtonClick(val.isCorrect)}>{val.answerText}</button>
              ))}
            </div>
          </div>
        </>
        }
    </div>
  )
}

export default QuizApp