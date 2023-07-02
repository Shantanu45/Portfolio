import { useState } from 'react'
import Main from "./components/main/main"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
    </>
  )
}

export default App
