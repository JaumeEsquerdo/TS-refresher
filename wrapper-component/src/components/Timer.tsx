import Container from "./UI/Container";
import { useTimersContext, type Timer as TimerProps } from "../store/timers-context";
import { useState, useEffect, useRef } from "react";

const Timer = ({ name, duration }: TimerProps) => {
    const [remainingTime, setRemainingTime] = useState(duration * 1000) //se convierte x 1000 en milisegundos
    const interval = useRef<number | null>(null)
    const { isRunning } = useTimersContext()

    // aqui el 'clearInterval': Su trabajo es detener el timer cuando llega a 0
    if (remainingTime <= 0 && interval.current) {
        clearInterval(interval.current)
    }


    // aqui el 'clearInterval': Su trabajo es limpiar el intervalo si el componente se desmonta antes de que el tiempo llegue a 0.
    useEffect(() => {
        let timer: number;
        if (isRunning) {
            timer = setInterval(function () {
                setRemainingTime(prev => prev - 50)
            }, 50)
            interval.current = timer; // se le pasa el timer utilizado en el useEffect al interval.current para que lo pueda parar en el condicional de arriba si es necesario

            // si isRunning es false y interval.current existe, se limpia
        } else if (interval.current) {
            clearInterval(interval.current)
        }

        return () => clearInterval(timer)
    }, [isRunning])

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

    return (
        <Container as='article'>
            <h2>{name}</h2>
            <p><progress max={duration * 1000} value={remainingTime} /></p>
            <p>{formattedRemainingTime}</p>
        </Container>
    );
}

export default Timer;