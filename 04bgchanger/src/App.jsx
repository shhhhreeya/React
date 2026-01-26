import { useState } from 'react'

function App() {
  const [color, setColor] = useState('amber')

  return (
    <>
    <div className={`fixed inset-0 flex justify-center items-center ${color}`}>

      <div className='flex bg-amber-200 justify-center items-center p-3 gap-4 rounded-2xl '>
        <button onClick={() => setColor("bg-purple-500")} className=' bg-purple-500 '>Purple</button>
        <button onClick={() => setColor("bg-pink-500")} className='bg-pink-500'>Pink</button>
        <button onClick={() => setColor('bg-blue-600')} className='bg-blue-600 '>Blue</button>
    </div>
    </div>
    </>
  )
}

export default App
