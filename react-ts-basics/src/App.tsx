import Header from "./components/Header";
import reactImage from '../src/assets/react.svg'
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoal = {
  title: string,
  description: string,
  id: number
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />

    </main>
  );
}

export default App