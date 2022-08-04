import { FC } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export interface ClassIconProps {
    href: string;
    src: string;
}
interface IBackgroundImage {
    backgroundImage: string;
    relativePath: string;
    href: string;
}

const ButtonStyled = styled.button<IBackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
    border: 2px solid ${(props) => props.href === props.relativePath && "rgba(64, 191, 64, 0.8)"};
    opacity: ${(props) => (props.href === props.relativePath ? 1 : 0.6666)};
`;

export const ClassIcon: FC<ClassIconProps> = ({ href, src }) => {
    let location = useLocation();
    return (
        <Link to={href}>
            <ButtonStyled backgroundImage={src} tabIndex={-1} relativePath={location.pathname} href={href} />
        </Link>
    );
};
