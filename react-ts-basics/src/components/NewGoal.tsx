import { type FormEvent, useRef } from "react";

// Esto asegura que onAddGoal solo se llame con textos del formulario
type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

// NewGoal recibe una prop llamada onAddGoal que espera una función (goal: string, summary: string) => void
const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    // goal y summary son referencias a inputs HTML (useRef<HTMLInputElement>).
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null)

    // FormEvent<HTMLFormElement> le dice a TypeScript qué tipo de evento recibe
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // El operador ! (“non-null assertion”) le dice a TS: “no te preocupes, sé que no es null cuando lo uso”
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        // new FormData(e.currentTarget)

        //para resetear form:
        e.currentTarget.reset() // .focus() también es interesante para enfocar un input que quieras siempre que lo tengas agarrado

        // Llama a onAddGoal(enteredGoal, enteredSummary), respetando el tipo definido en las props.
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