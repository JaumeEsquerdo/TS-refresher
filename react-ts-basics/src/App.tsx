import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import reactImage from '../public/vite.svg'
import { useState } from "react";

type CourseGoal = {
  title: string,
  description: string,
  id: number
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = () => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth!'
      }
      return [...prev, newGoal]

    })
  }
  return (
    <main>
      <Header image={{ src: reactImage, alt: 'A image of react' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}  >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>

    </main>
  );
}

export default App