import { useState } from 'react'
import Assests from './Components/Assests';
import './App.css'
import SelectToken from './Components/SelectToken'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-[url(C:\Users\nisha\Desktop\QuillCheck\quillcheck1\src\assets\BG.png)] bg-cover bg-center h-screen'>
     <SelectToken />
     </div>
      
    </>
  )
}

export default App
