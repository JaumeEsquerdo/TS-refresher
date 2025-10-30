import { type ReactNode } from "react";

type HeaderProps = {
    image: {
        src: string;
        alt: string
    };
    children: ReactNode
}

const Header = ({ image, children }: HeaderProps) => {
    const { src, alt } = image
    return (
        <header>
            <img src={src} alt={alt} />
            {children}
        </header>
    );
}

export default Header;