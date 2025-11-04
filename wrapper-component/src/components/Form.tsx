import type { ComponentPropsWithoutRef, FormEvent } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void
}
export type FormHandle = {
    clear: () => void
}

// 👇 forwardRef recibe dos parámetros de tipo genérico:
// 1️⃣ el tipo del 'ref' que se expone al padre (FormHandle)
// 2️⃣ el tipo de las props que el componente acepta (FormProps)
const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {
    // 💬 Desestructuramos 'onSave' para evitar que se incluya en '...otherProps',
    // ya que 'onSave' no es una prop válida de <form> y TypeScript marcaría error
    // si se intentara pasar al elemento HTML. Además, así podemos usarla
    // directamente dentro del componente.

    const form = useRef<HTMLFormElement>(null)

    // useImperativeHandle se usa junto con forwardRef para definir qué parte del componente
    // (por ejemplo, funciones o valores) será accesible desde el componente padre a través del ref.
    // En este caso, el padre podrá llamar formRef.current.clear() para resetear el formulario.

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('Clearing')
                form.current?.reset()
            }
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        onSave(data)
        // form.current?.reset()
    }

    return (
        <form ref={form} onSubmit={handleSubmit} {...otherProps}>{children}</form >
    );
}
)


export default Form;