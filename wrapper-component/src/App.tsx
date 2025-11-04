import Input from './components/Input'
import Button from './components/Button'
import './App.css'
import Form, { type FormHandle } from './components/Form'
import { useRef } from 'react'

function App() {
  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string, number: string } // string en number porq en inputs es siempre strings aunq sea tipo number
    console.log(extractedData)
    customForm.current?.clear()
  }

  return (
    <>
      <main>
        <Form onSave={handleSave} ref={customForm}>
          <Input type='text' label='Name' id='name' />
          <Input type='number' label='Ager' id='age' />
          <p>
            <Button>Save</Button>
          </p>
        </Form>
      </main >
    </>
  )
}

export default App
