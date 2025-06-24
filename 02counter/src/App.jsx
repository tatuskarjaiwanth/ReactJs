import React , { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter /* name can be anything*/]= useState(5)

  // let counter = 5
  const addValue = () =>{
    // counter += 1
    setCounter(counter + 1)
    // setCounter(counter + 1) // this will not work as expected because setCounter is asynchronous
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    console.log('Counter value:', counter)

    //use prevCounter => prevCounter + 1 (to do multiple increments)
  }
  const decValue = () =>{
    setCounter(counter - 1);
    console.log('Counter value:', counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick= {addValue}>increment value </button>
      <br />
      <button 
      onClick={decValue}>decrement value</button>

    </>
  )
}

export default App


//incremeting and changing counter value at multiple places using clssic javascript is not a good practice
//so we use react hooks to manage state
//chnges get propogated to the UI automatically