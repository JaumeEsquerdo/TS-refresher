import type { ComponentPropsWithoutRef } from "react"

// type ButtonProps = {
//     el: 'button'
// } & ComponentPropsWithoutRef<'button'>

// type AnchorProps = {
//     el: 'anchor'
// } & ComponentPropsWithoutRef<'a'>
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props
}

const Button = (props: ButtonProps | AnchorProps) => {
    // const { el, ...otherProps } = props
    if (isAnchorProps(props)) {
        return <a className="button" {...props}></a>
    }
    return (
        <button className="button" {...props}></button>
    );
}

export default Button;

/* Para tipar fuerte de otra forma: */

// type ButtonProps = {
//   as: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//   as: 'a';
// } & ComponentPropsWithoutRef<'a'>;

// function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
//   return props.as === 'a';
// }

// luego

// if (isAnchorProps(props)) {
//   return <a {...props} />;
// }
// return <button {...props} />;