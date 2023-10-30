import Link from "next/link";
import { FC } from "react";
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
    border: 2px solid #212e46;
    cursor: pointer;
    /* border: 2px solid ${(props) => props.href === props.relativePath && "var(--uncapped-node-color)"}; */
    opacity: ${(props) => (props.href === props.relativePath ? 1 : 0.6666)};
    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 5px #596e92;
    }
`;

export const ClassIcon: FC<ClassIconProps> = ({ href, src }) => {
    return (
        <Link href={href}>
            <ButtonStyled backgroundImage={src} tabIndex={-1} relativePath={location.pathname} href={href} />
        </Link>
    );
};
