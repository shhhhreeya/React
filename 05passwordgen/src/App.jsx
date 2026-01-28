import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberallowed, setNumberAllowed] = useState(false)
  const[symbolallowed, setSymbolAllowed] = useState(false)
  const[password, setPassword] = useState('')

  const passwordRef = useRef(null)
    const generatePassword  = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberallowed){
        str += "0123456789"
      }
      if(symbolallowed){
        str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
      }
      for(let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    }, [length, numberallowed, symbolallowed])

    const copyPasswordToClipboard = () => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
    }

    useEffect(() => {
      generatePassword()
    }, [length, numberallowed, symbolallowed])

    

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-600'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      

      <input 
      type="text" 
      value={password}
      ref={passwordRef} 
      className='outline-none w-full py-1 px-3 bg-white'
      placeholder='Enter Password'
      readOnly/>
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <input 
      type="range" 
      min={6} 
      max={15}
      value={length} 
      className='cursor-pointer' 
      onChange={(e) => setLength(e.target.value
      )}/> 
      <label htmlFor="Length">Length: {length}</label>
    </div>
    <div className='flex text-sm gap-x-2'>
      <input type="checkbox" 
      defaultChecked={numberallowed}
      onChange={() => {
        setNumberAllowed((prev) => !prev)
      }}/> 
      <label htmlFor="Numbers">Numbers</label>
    <div className='flex text-sm gap-x-2'>
      <input type="checkbox" 
      defaultChecked={symbolallowed}
      onChange={() => setSymbolAllowed((prev) => !prev)}/> 
      <label htmlFor="Character">Characters</label>
    </div>
   </div>
   </div>
  )
}

export default App
