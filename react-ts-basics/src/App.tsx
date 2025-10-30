import Header from "./components/Header";
import reactImage from '../src/assets/react.svg'
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
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

  const handleDeleteGoal = (id: number) => {
    setGoals(prev => prev.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: reactImage, alt: 'A image of react' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

    </main>
  );
}

export default App