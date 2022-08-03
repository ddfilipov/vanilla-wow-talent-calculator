import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface ClassIconProps {
    href: string;
    src: string;
    alt: string;
}
interface IBackgroundImage {
    backgroundImage: string;
}

const ButtonStyled = styled.button<IBackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
`;

export const ClassIcon: FC<ClassIconProps> = ({ href, src, alt }) => {
    return (
        <Link to={href}>
            {/* <img src={src} alt={alt}></img> */}
            <ButtonStyled backgroundImage={src} />
        </Link>
    );
};
