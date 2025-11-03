import Input from './components/Input'
import Button from './components/Button'
import './App.css'

function App() {


  return (
    <>
      <h1>Let's get started</h1>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
      <p>
        <Button >A button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A link</Button >
      </p >
    </>
  )
}

export default App
