import Button from './components/Button'
import BookSession from './components/BookSession'
import UpcomingSessions from './components/UpcomingSessions'
import { useState } from 'react'

/**
 * App principal:
 * - Demuestra el uso de <Button> (como botón y como Link)
 * - Muestra modales condicionales según el estado
 */

function App() {
  const [book, setBook] = useState(false);
  const [upcoming, setUpcoming] = useState(false);

  return (
    <>
      {/* renderiza un button normal */}
      <Button onClick={() => setBook(true)}>Book Session</Button>

      {/* renderiza un Link de React Router */}
      <Button to='/sessions'>Go to sessions page</Button>

      {/* al montar estos componentes, los modales se abren automáticamente */}
      {book && <BookSession onClose={() => setBook(false)} />}
      {upcoming && <UpcomingSessions onClose={() => setUpcoming(false)} />}
    </>
  )
}

export default App
