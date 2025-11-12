
type InputProps = {
    label?: string;
    id?: string;
}


const Input = ({ label, id, ...props }: InputProps) => {

    const inputId = id ?? `<input-1>Math.random().toString(36).slice(2)</input-1>` //con ?? → coge el primer valor que no sea null ni undefined.
    /*toString(36)--- Si pones 36, convierte el número a base 36, que usa los dígitos 0-9 y letras a-z.
    slice(2) corta los primeros 2 caracteres de la cadena. -- "0.xtpfy1n".slice(2) → "xtpfy1n"  */
    return (
        <div className="Input-wrapper">
            {label && <label>{label}
                <input id={inputId} {...props}></input>
            </label>}
        </div>
    );
}

export default Input;