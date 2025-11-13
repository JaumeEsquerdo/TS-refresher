import { createContext, type Dispatch, useReducer } from "react";
import { type ReactNode } from "react";
/**
 * Contexto global para manejar las sesiones reservadas.
 * 
 * - useReducer gestiona el estado (lista de sesiones)
 * - Context permite acceder y modificar desde cualquier componente
 */

export type Session = { id: string; name: string; date: string }
type State = { sessions: Session[] }

//tipamos las acciones posibles del reducer
type Action = | { type: 'add'; payload: Session } | { type: 'remove'; payload: string };

type SessionsProvider = {
    children: ReactNode
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'add':
            return { sessions: [...state.sessions, action.payload] };
        case 'remove':
            return { sessions: state.sessions.filter(s => s.id !== action.payload) };
        default: return state
    }
}

// creamos dos contextos: uno para el estado, otro para las acciones
export const SessionsState = createContext<State | null>(null);
export const SessionsDispatch = createContext<Dispatch<Action> | null>(null)

//Provider que envuelve toda la app
export const SessionsProvider = ({ children }: SessionsProvider) => {
    const [state, dispatch] = useReducer(reducer, { sessions: [] })

    return (
        <SessionsState.Provider value={state}>
            <SessionsDispatch.Provider value={dispatch}>
                {children}
            </SessionsDispatch.Provider>
        </SessionsState.Provider>
    );
}
