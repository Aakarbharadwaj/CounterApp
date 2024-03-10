import { CounterProvider } from './context/CounterContext'
import CounterControls from './component/CounterControls'
import CounterDisplay from './component/CounterDisplay'
import './App.css'

function App() {

  return (
    <CounterProvider>
      <div>
        <h1>counte App</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterProvider>
  )
}

export default App
