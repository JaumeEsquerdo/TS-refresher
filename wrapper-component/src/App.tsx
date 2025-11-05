import Header from "./components/Header"
import AddTimer from "./components/AddTimer"
import Timers from "./components/Timers"

function App() {
  // const customForm = useRef<FormHandle>(null);

  // const handleSave = (data: unknown) => {
  //   const extractedData = data as { name: string, number: string } // string en number porq en inputs es siempre strings aunq sea tipo number
  //   console.log(extractedData)
  //   customForm.current?.clear()
  // }

  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </>
  )
}

export default App
