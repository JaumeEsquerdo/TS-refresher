import Container from "./UI/Container";
import { type Timer as TimerProps } from "../store/timers-context";
import { useState, useEffect } from "react";


const Timer = ({ name, duration }: TimerProps) => {
    const [remainingTime, setRemainingTime] = useState(duration * 1000) //se convierte x 1000 en milisegundos

    useEffect(() => {
        setInterval(function () {
            setRemainingTime(prev => prev - 50)
        }, 50)
    }, [])

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