/********************************** Exercise  1.13 ***********************************

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>

      <Button handleClick={handleAnecdoteClick} text={'next anecdote'}/>
    </div>
  )
}

export default App

*/

import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const copy = [...anecdotes]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * copy.length))
  }

  const handleVoteClick = () => {
    Array.apply(null, new Array(vote)).map(Number.prototype.valueOf,selected)
    setVote(vote + 1)
  }
  

  return (
    <div>
      <p>{copy[selected]}</p>
      
      <p>has {vote} votes</p>
      <Button handleClick={handleVoteClick} text={'vote'}/>
      <Button handleClick={handleAnecdoteClick} text={'next anecdote'}/>
    </div>
  )
}

export default App