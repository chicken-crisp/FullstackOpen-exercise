import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
const App = () => {
  const course ={ 
    name : 'Half Stack application development',
   parts : [
  {
    name : 'Fundamentals of React',
   exercises : 10
  },
  {
    name : 'Using props to pass data',
   exercises : 7
  },

  {
    name : 'State of a component',
  exercises : 14
  }
  ]
}
const totalSum = course.parts.reduce((sum, part) => sum + part.exercises,0)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total = {totalSum}/>
    </div>
  ) 
}
export default App