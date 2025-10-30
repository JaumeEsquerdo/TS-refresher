import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import reactImage from '../public/vite.svg'
const App = () => {
  return (
    <main>
      <Header image={{ src: reactImage, alt: 'A image of react' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal title='Learn React and TS'  >
        <p>Learning with a course how to use TS in a React project</p>
      </CourseGoal>
    </main>
  );
}

export default App