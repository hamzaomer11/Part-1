/********************************** Exercise  1.12 ***********************************

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

/*********************************** Exercise 1.13 ****************************************

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
   
  const handleVoteClick = () => {
    const copyVote = [...vote]
    copyVote[selected] += 1
    setVote(copyVote)
  }

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0,0]) //assign zero-filled array to 'vote' variable

  
  const handleAnecdoteClick = () => {
    const randomAnecdote = (Math.floor(Math.random() * anecdotes.length))
    setSelected(randomAnecdote)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      
      <p>has {vote[selected]} votes</p>
      <Button handleClick={handleVoteClick} text={'vote'}/>
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

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0)) //assign zero-filled array to 'vote' variable
  const [maxVote, setMaxVote] = useState(0)
  const copyVote = [...vote]

  console.log(selected, 'This is selected')
  console.log(maxVote, 'This is maximum vote of array')
  
  const handleVoteClick = () => {
    //empty 'vote' array is duplicated over to 'copyVote' variable
    copyVote[selected] += 1
    //value of 'selected' is 0 initially. Value @ index is incremented by 1.
    setVote(copyVote)
    console.log(copyVote, 'New copyVote')
    //Updated copyVote array assigned back to 'vote' variable, replacing initial empty array.
    var maximumVote = Math.max(...copyVote)
    setMaxVote(maximumVote)
    //assigns maximum value from 'copyVote' array to 'maxVote' variable
    console.log(copyVote[selected], anecdotes[selected])
  }

  let mostVotesAnecedote = copyVote.indexOf(maxVote)

  const handleAnecdoteClick = () => {
    const copyAnecdote = [...anecdotes]
    const randomAnecdote = (Math.floor(Math.random() * copyAnecdote.length))
    setSelected(randomAnecdote)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      
      <p>has {vote[selected]} votes</p>
      <Button handleClick={handleVoteClick} text={'vote'}/>
      <Button handleClick={handleAnecdoteClick} text={'next anecdote'}/>

      <MostVotes maxVote={maxVote} anecdotes={anecdotes} mostVotesAnecedote={mostVotesAnecedote}/>
    </div>
  )
}

const MostVotes = (props) => {
  if(props.maxVote === 0) {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <div>
        <h2>Anecdote with most votes</h2>

        <p>{props.anecdotes[props.mostVotesAnecedote]}</p>
        <p>has {props.maxVote} votes</p>
      </div>
    )
  }
}

export default App

