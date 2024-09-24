import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectToken from './Components/SelectToken'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <SelectToken />
    
      
    </>
  )
}

export default App
