import { createContext, type ReactNode } from "react";
import { useContext } from "react";

type Timer = {
    name: string;
    duration: number
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)

export const useTimersContext = () => {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error('TimersContext is null')
    }
    return timersCtx
}

type TimersContextProviderProps = {
    children: ReactNode
}

export const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer() {
            //..
        },
        startTimers() { },
        stopTimers() {
            //..
        },
    }
    return (
        <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
    )
}