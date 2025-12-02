import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {parseFloat(positive)}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const point = {
    good:1,
    neutral:0,
    bad:-1
  }
  const average = (good * point.good + neutral * point.neutral + bad * point.bad) / all
  const positive = good / all


  const HandleClickGood = () => {
      console.log(good)
      setGood(good + 1)
  }

  const HandleClickNeu = () => {
      console.log(neutral)
      setNeutral(neutral + 1)
  }

  const HandleClickBad = () => {
      console.log(bad)
      setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={HandleClickGood}>good</button>
      <button onClick={HandleClickNeu}>neutral</button>
      <button onClick={HandleClickBad}>bad</button>
      <h2>statistics</h2>
      {all > 0 ?
      <Statistics
      good={good} neutral={neutral} bad={bad} 
      all={all} average={average} positive={positive}
      />
      : <p>No feedback given</p>
      }
    </div>
  )
}

export default App