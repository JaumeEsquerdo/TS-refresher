import CourseGoal from '../components/CourseGoal'
import { type CourseGoal as CGoal } from '../App';

// CGoal viene del type CourseGoal exportado desde App
type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

/* goals: un array de CourseGoal[]
onDeleteGoal: una función (id: number) => void */
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal} >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
}

export default CourseGoalList;