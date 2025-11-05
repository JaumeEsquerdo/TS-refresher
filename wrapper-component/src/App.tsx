import Header from "./components/Header"
import AddTimer from "./components/AddTimer"
import Timers from "./components/Timers"
import { TimersContextProvider } from '../src/store/timers-context'

function App() {
  // const customForm = useRef<FormHandle>(null);

  // const handleSave = (data: unknown) => {
  //   const extractedData = data as { name: string, number: string } // string en number porq en inputs es siempre strings aunq sea tipo number
  //   console.log(extractedData)
  //   customForm.current?.clear()
  // }

  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  )
}

export default App
