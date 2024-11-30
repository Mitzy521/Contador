
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <h1>Contadores en react-vite</h1>
      <div className="card">
        <p>Ascenso</p>
        <button onClick={() => setCount1((count1) => count1 < 25 ? count1 + 1 : count1)}>
          conteo {count1}
        </button>
      </div>
      <div className="card">
        <p>Descenso</p>
        <button onClick={() => setCount2((count2) => count2 > -25 ? count2 - 1 : count2)}>
          conteo {count2}
        </button>
      </div>
    </>
  )
}

export default App