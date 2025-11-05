import Input from "./UI/Input";
import Form, { type FormHandle } from "./UI/Form";
import Button from "./UI/Button";
import { useRef } from "react";
import { useTimersContext } from "../store/timers-context";

const AddTimer = () => {
    const form = useRef<FormHandle>(null)

    const { addTimer } = useTimersContext()

    const handleSaveTimer = (data: unknown) => {
        const extractedData = data as { name: string, duration: string }
        addTimer({ name: extractedData.name, duration: +extractedData.duration })
        console.log("DATA RECIBIDA:", extractedData)

        form.current?.clear()
    }

    return (
        <Form ref={form} onSave={handleSaveTimer} id='add-timer'>
            <Input type='text' label="Name" id='name' name='name' />
            <Input type='number' label="Duration" id='duration' name='duration' />
            <p>
                <Button>
                    Add timer
                </Button>
            </p>
        </Form>
    );
}

export default AddTimer;