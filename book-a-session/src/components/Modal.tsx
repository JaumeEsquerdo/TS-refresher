import { forwardRef, useImperativeHandle, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom';

/**
 * Este componente usa el elemento HTML nativo <dialog>.
 * 
 * Funcionalidad:
 * - Se monta en #modal-root (gracias a createPortal)
 * - Expone métodos open() y close() para controlarlo desde fuera
 * - Se puede cerrar desde dentro o haciendo clic en el fondo
 */


export type ModalHandle = {
    open: () => void;
    close: () => void;
}

/**
 * ⬇️ Aquí se utiliza `forwardRef`
 * --------------------------------
 * Por defecto, los componentes funcionales en React **no pueden recibir refs**.
 * 
 * `forwardRef` permite que este componente (Modal) acepte una ref que proviene del padre
 * y la "redirija" internamente para exponer una interfaz controlada.
 * 
 * En este caso, el tipo `ModalHandle` indica qué métodos se expondrán al componente padre.
 */
const Modal = forwardRef<ModalHandle, { children: ReactNode; onClose?: () => void }>(({ children, onClose }, ref) => { // forwardRef recibe una función callback como argumento. Por eso está envuelto dentro de un paréntesis   // Se pasa como argumento a `forwardRef`, que la "envuelve" para permitir recibir una ref desde el padre.



    /**
     * ⬇️ Aquí se usa `useRef`
     * ------------------------
     * Se crea una referencia interna al elemento <dialog> del DOM.
     * 
     * `useRef` nos da un objeto con la forma `{ current: valor }`.
     * Cuando el <dialog> se monte, `dialogRef.current` apuntará al elemento real del DOM.
     */
    const dialogRef = useRef<HTMLDialogElement>(null)

    /**
    * ⬇️ Aquí entra `useImperativeHandle`
    * -----------------------------------
    * Esta función nos permite controlar **qué métodos o propiedades** se exponen
    * al componente padre cuando se usa la ref.
    * 
    * En vez de devolver directamente `dialogRef`, aquí se define un "handle" personalizado:
    * - open() llama a `dialogRef.current?.showModal()` para abrir el diálogo.
    * - close() llama a `dialogRef.current?.close()` para cerrarlo.
    * 
    * Es decir: el componente padre podrá usar `ref.current.open()` o `ref.current.close()`.
    */
    useImperativeHandle(ref, () => ({
        open: () => dialogRef.current?.showModal(),
        close: () => dialogRef.current?.close()
    }))

    //estructura del modal
    const modalElement = (
        <dialog
            ref={dialogRef}
            className='Modal'
            onClose={onClose}
            onClick={(e) => {
                // si el user hace clic fuera del contenido. cerrar modal
                if (e.target === dialogRef.current) dialogRef.current?.close()
            }}
        >
            {children}
            {/* btn genérico para cerrar el modal */}
            <button className='Button' onClick={() => dialogRef.current?.close()}>
                Cerrar
            </button>
        </dialog>
    )
    return createPortal(modalElement, document.getElementById('modal-root')!);
}
)
export default Modal;