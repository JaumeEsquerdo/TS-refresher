import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

/**
 * Este componente debe ser flexible y reutilizable:
 * - Si recibe la prop "to" → renderiza un <Link> de react-router
 * - Si NO recibe "to" → renderiza un <button> normal
 * - Siempre debe tener la clase CSS "button"
 * - Si recibe textOnly={true}, añade además "button--text-only"
 * - Debe aceptar props normales de button o Link y pasarlos al elemento final (...spread)
 */

type BaseProps = {
    to?: string;
    textOnly?: boolean;
    children: ReactNode;
    className?: string;
}
type ButtonAsLink = BaseProps & LinkProps;

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = ButtonAsLink | ButtonAsButton

const Button = ({ textOnly, children, className, to, ...rest }: ButtonProps) => {
    const classes = [
        'button', //siempre aplica (default)
        textOnly && 'button--text-only', //solo si textOnly es true
        className, // por si vino alguna clase adicional
    ].filter(Boolean).join(' '); // .filter(Boolean) elimina todos los valores falsy del array (como false, null --- .join(" ") Une todos los elementos del array en un string, separándolos con un espacio.


    if (to !== undefined) {
        return (
            <Link to={to} className={classes} {...(rest as Omit<LinkProps, 'to'>)}> {/* EL Omit: “pasa todas las props de Link menos to”. */}
                {children}</Link>
        )
    }
    return (
        <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}

export default Button;