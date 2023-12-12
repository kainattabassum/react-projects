import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    console.log("value : ", count);
    if(count < 20) {
      setCount(count + 1)
    }
  }

  const counterVal = () => {
    setCount(preCounter => preCounter + 1)
    setCount(preCounter => preCounter + 1)
    setCount(preCounter => preCounter + 1)
    setCount(preCounter => preCounter + 1)
  }
  const removeValue = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Counter Project</h1>
      <h2>Count Value : {count}</h2>

      <button onClick={counterVal}>PREV COUNTER VALUE</button>
      <button className={`${count >= 20 && 'disabled'}`} onClick={addValue}>ADD VALUE {count}</button>
      <button className={`${count == 0 && 'disabled'}`} onClick={removeValue}>REMOVE VALUE {count}</button>
    </div>
  )
}

export default App
