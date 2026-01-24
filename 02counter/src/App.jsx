import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15) //any change in the state changes the ui
  //const [variable, function]
  //let counter = 15

  const addValue = () => {
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React basic with shreeya {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
