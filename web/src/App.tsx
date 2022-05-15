import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex gap-2'>
      <h1>Hello Random Picker</h1>
      <button className="button">Default</button>
    </div>
  )
}

export default App
