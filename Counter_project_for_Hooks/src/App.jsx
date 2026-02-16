import { useState } from 'react'
import './App.css'

function App() {
  
const[counter, setcounter] = useState(15);


const addValue = () =>
  {
    setcounter(counter+1)
    console.log(`clicked ${counter}`)
  }

const minusValue = () =>
  {
    setcounter(counter-1)
    console.log(`clicked ${counter}`)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Increase value {counter}</button>
     <br />
     <button onClick={minusValue}>Decrease value {counter}</button>

     <footer>Footer {counter}</footer>
    </>
  )
}

export default App
