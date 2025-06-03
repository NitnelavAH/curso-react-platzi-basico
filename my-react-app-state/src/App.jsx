import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';
import NameForm from './components/NameForm';
import CounterWithEffect from './components/CounterWithEffect';

import './App.css'

function App() {
  return (
    <>
      <h2>Counter</h2>
      <Counter />
      
      <h2>Toggle</h2>
      <ToggleButton />
      
      <h2>Form</h2>
      <NameForm />

      <h2>Conter With Effect</h2>
      <CounterWithEffect />
    </>
  )
}

export default App
