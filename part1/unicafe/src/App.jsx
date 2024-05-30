/*********************************** Exercise 1.6 ******************************

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button> 
      <button onClick={() => setBad(bad + 1)}>Bad</button> 
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>

  )
}

export default App

*/

/*********************************** Exercise 1.7 *****************************
 
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button> 
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {((props.good /(props.good + props.neutral + props.bad)) - (props.bad /(props.good + props.neutral + props.bad)))}</p>
      <p>positive {(good/(good + neutral + bad)) * 100} %</p>
    </div>
    
  )
}

export default App

*/

/*********************************** Exercise 1.8 ***************************************

import { useState } from 'react'

const Statistics = (props) => {
    return (
      <div>
      <b>good</b> {props.good} <br />
      <b>neutral</b> {props.neutral} <br />
      <b>bad</b> {props.bad} <br />
      <b>all</b> {props.good + props.neutral + props.bad} <br />
      <b>average</b> {((props.good /(props.good + props.neutral + props.bad)) - (props.bad /(props.good + props.neutral + props.bad)))} <br />
      <b>positive</b> {(props.good/(props.good + props.neutral + props.bad)) * 100} %
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button> 
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} all = {good + neutral + bad} average = {((good /good + neutral + bad) - (bad / good + neutral + bad))} positive = {(good/(good + neutral + bad)) * 100}/>
    </div>
  )
}

export default App

*/

/*************************************** Exercise 1.9 ************************************

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button> 
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>
      
      <Statistics good={good} neutral={neutral} bad={bad} all = {good + neutral + bad} average = {((good /good + neutral + bad) - (bad / good + neutral + bad))} positive = {(good/(good + neutral + bad)) * 100}/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
    <b>good</b> {props.good} <br />
    <b>neutral</b> {props.neutral} <br />
    <b>bad</b> {props.bad} <br />
    <b>all</b> {props.good + props.neutral + props.bad} <br />
    <b>average</b> {((props.good /(props.good + props.neutral + props.bad)) - (props.bad /(props.good + props.neutral + props.bad)))} <br />
    <b>positive</b> {(props.good/(props.good + props.neutral + props.bad)) * 100} %
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
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick}/>
      <Button handleClick={handleNeutralClick}/>
      <Button handleClick={handleBadClick}/>

      <h2>Statistics</h2>
      
      <Statistics good={good} neutral={neutral} bad={bad} all = {good + neutral + bad} average = {((good /good + neutral + bad) - (bad / good + neutral + bad))} positive = {(good/(good + neutral + bad)) * 100}/>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {text}

    </div>
  )

}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
    <b>good</b> {props.good} <br />
    <b>neutral</b> {props.neutral} <br />
    <b>bad</b> {props.bad} <br />
    <b>all</b> {props.good + props.neutral + props.bad} <br />
    <b>average</b> {((props.good /(props.good + props.neutral + props.bad)) - (props.bad /(props.good + props.neutral + props.bad)))} <br />
    <b>positive</b> {(props.good/(props.good + props.neutral + props.bad)) * 100} %
    </div>
  )
}

export default App