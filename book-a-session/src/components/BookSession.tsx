import { useEffect, useRef, type FormEvent } from "react";
import Modal, { type ModalHandle } from "./Modal";
import Input from "./Input";
import { useSessionsDispatch } from "../context/hooks";
import { v4 as uuid } from "uuid";

/**
 * Este componente:
 * - Abre automáticamente el modal al montarse
 * - Usa FormData para recoger los datos del formulario
 * - Añade una nueva sesión al Context global
 */

const BookSession = ({ onClose }: { onClose?: () => void }) => {
    const modalRef = useRef<ModalHandle>(null) //ref para abrir/cerar modal
    const formRef = useRef<HTMLFormElement>(null) //ref para acceder al form
    const dispatch = useSessionsDispatch(); //acceso al contexto global

    //abre el modal al montar el componente
    useEffect(() => {
        modalRef.current?.open()
    }, [])

    //maneja el envío del form
    const saveSession = (e: FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        // formData recoge automáticamente los valores del form
        const fd = new FormData(formRef.current);
        const data = Object.fromEntries(fd); // convierte una lista de pares del form en un objeto normal de JS

        dispatch({
            type: 'add',
            payload: { id: uuid(), name: data.name as string, date: data.date as string }
        })

        // cerramos el modal y notificamos al padre
        modalRef.current?.close(); // cierra el modal visualmente
        onClose?.() // controla el estado en el componente padre. Para que lo pueda desmontar
    }

    return (
        <Modal ref={modalRef} onClose={onClose}>
            <h2>Book a Session</h2>

            {/* Formulario conectado a formRef */}
            <form ref={formRef} onSubmit={saveSession}>
                {/* Importante: usar 'name' para que FormData los reconozca */}
                <Input label='Name' name='name' required />
                <Input label='Date' type='date' name='date' required />
                <button className="Button">Save Session</button>
            </form>

        </Modal>
    );
}

export default BookSession;