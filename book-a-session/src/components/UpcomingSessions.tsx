import { useEffect, useRef } from "react";
import Modal, { type ModalHandle } from "./Modal";

import { useSessions, useSessionsDispatch } from "../context/hooks";

/**
 * Este componente:
 * - Abre un modal automáticamente al montarse
 * - Muestra las sesiones guardadas desde el context
 * - Permite eliminar sesiones
 */

const UpcomingSessions = ({ onClose }: { onClose?: () => void }) => {
    const modalRef = useRef<ModalHandle>(null)
    const { sessions } = useSessions(); // desestructuras cuando la función devuelve un objeto con varias propiedades, no cuando devuelve un único valor.
    const dispatch = useSessionsDispatch();

    useEffect(() => {
        modalRef.current?.open()
    }, [])

    return (
        <Modal ref={modalRef} onClose={onClose}>
            <h2>Upcomming Sessions</h2>
            {sessions.length === 0 && <p>No sessions booket yet</p>}
            {sessions.length >= 1 && sessions.map((s) => (
                <div key={s.id}>
                    {s.name} - {s.date}
                    <button
                        className="Button"
                        onClick={() => dispatch({ type: 'remove', payload: s.id })}
                    >Delete</button>
                </div>
            ))}
        </Modal>
    );
}

export default UpcomingSessions;