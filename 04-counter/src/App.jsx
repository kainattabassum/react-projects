import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    console.log("value : ", count);
    if (count < 20) {
      setCount(count + 1)
    }
  }

  const counterVal = () => {
    if (count < 17) {
      setCount(preCounter => ++preCounter)
      setCount(preCounter => ++preCounter)
      setCount(preCounter => ++preCounter)
      setCount(preCounter => ++preCounter)
    }
  }
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Counter Project</h1>
      <h2>Count Value : {count}</h2>

      <button className={`${count > 17 && 'disabled'}`} onClick={counterVal}>4 - PREV COUNTER VALUE</button>
      <button className={`${count >= 20 && 'disabled'}`} onClick={addValue}>ADD VALUE {count}</button>
      <button className={`${count == 0 && 'disabled'}`} onClick={removeValue}>REMOVE VALUE {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App
