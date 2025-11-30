import { useState } from 'react'

import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const  [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('increasing, value before', counter)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('decreasing, value before', counter)
  }
  const setZero = () => {
    setCounter(0)
    console.log('resetting to zero, value before', counter)
  }

  console.log('rendering...', counter)

  return (
  <div>
   <Display counter={counter}/>
  <Button 
   onClick={increaseByOne}
   text ='plus'
   />
   <Button 
   onClick={decreaseByOne}
   text ='minus'
   />
   <Button 
   onClick={setZero}
   text ='reset'
   />
  </div>
 )
}


export default App