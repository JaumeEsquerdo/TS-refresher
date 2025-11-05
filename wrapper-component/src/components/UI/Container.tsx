import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = { // T que aun no estña definido, tendrá que ser un ElementTytpe
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>
// En ContainerProps<T>, T (que aquí será C) define qué tipo de elemento estás usando ('div', 'button', etc.).


// cuando declaras arriba en el Container componente...  as = "button" ⇒ C = "button"
const Container = <C extends ElementType>({ as, children, ...props }: ContainerProps<C>) => {

    const Component = as || 'div';

    return (
        <Component  {...props}>{children}</Component >
    );
}

export default Container;