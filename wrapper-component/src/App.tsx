import Input from './components/Input'
import './App.css'

function App() {


  return (
    <>
      <h1>Let's get started</h1>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
    </>
  )
}

export default App
