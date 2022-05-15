import { Bucket } from './components/Bucket'

export function App() {
  return (
    <div className="flex gap-2">
      <Bucket />
      <button className="button">Default</button>
    </div>
  )
}

export default App;
