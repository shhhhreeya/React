import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='text-3xl bg-green-900 rounded-md'>Vite with tailwind</h1>
      <Card username = "First" myArr = {newArr} />
      <Card username = "Second" post = 'Food yummy'/>
      <Card username = "Third" />
    </>
  )
}

export default App
