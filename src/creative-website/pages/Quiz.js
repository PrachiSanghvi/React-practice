import React from 'react'

const Quiz = () => {
  const questions = [
    {
      questionText : 'What is the capital of France?',
      answerOptions : [
        { answerText: 'new york', isCorrect : false },
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
    }
  ]
  return (
    <div className="quiz-wrapper">
      {questions.map(question => (
        <div>
          <div>{question.questionText}</div>
          <div className="answer-options">{question.answerOptions.map(answer => (
            <li>{answer.answerText}</li>
          ))}</div>
        </div>
      ))}
    </div>
  )
}

export default Quiz