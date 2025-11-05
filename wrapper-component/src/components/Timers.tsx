import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

const Timers = () => {
    const { timers } = useTimersContext()
    return (
        <ul>
            {timers.map(timer => <li key={timer.name}>
                {/* aqui se le pasa en ...timer los data del timer q esta en map */}
                <Timer {...timer} />
            </li>)}
        </ul>
    );
}

export default Timers;