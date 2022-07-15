import { FC } from "react";
import { Link } from "react-router-dom";

export interface ClassIconProps {
    href: string;
    src: string;
    alt: string;
}


export const ClassIcon: FC<ClassIconProps> = ({ href, src, alt }) => {
    return (
        <Link to={href}>
            <img src={src} alt={alt}></img>
        </Link>
    );
};
