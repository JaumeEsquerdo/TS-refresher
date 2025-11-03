import CourseGoal from '../components/CourseGoal'
import { type CourseGoal as CGoal } from '../App';
import InfoBox from './InfoBox';
import type { ReactNode } from 'react';

// CGoal viene del type CourseGoal exportado desde App
type CourseGoalListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

/* goals: un array de CourseGoal[]
onDeleteGoal: una función (id: number) => void */
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
    if (goals.length === 0) {
        return <InfoBox mode='hint'>You have no course goals yet. Start adding some!</InfoBox>
    }

    let warningBox: ReactNode;
    if (goals.length >= 4)
        warningBox = <InfoBox severity='medium' mode='warning'>You're collecting a lot of goals. Don't put to much on your plate</InfoBox>
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal} >
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CourseGoalList;