import { type FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        // new FormData(e.currentTarget)

        //para resetear form:
        e.currentTarget.reset()
        onAddGoal(enteredGoal, enteredSummary)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label > Your goal
                <input id="goal" type="text" name="goal" ref={goal} />
            </label>
            <label htmlFor="">Short summary
                <input id="summary" type="text" name="summary" ref={summary} />
            </label>
            <button>Add Goal</button>
        </form>
    );
}

export default NewGoal;