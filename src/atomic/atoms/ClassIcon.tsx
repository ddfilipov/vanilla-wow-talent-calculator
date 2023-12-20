"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styled from "styled-components";

export interface ClassIconProps {
    href: string;
    src: string;
}
interface IBackgroundImage {
    $backgroundImage: string;
    href: string;
    $currentPath: string;
}

const ButtonStyled = styled.button<IBackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.$backgroundImage});
    border: 2px solid #212e46;
    cursor: pointer;
    opacity: ${(props) => (props.href === props.$currentPath ? 1 : 0.5)};
    border: 2px solid
        ${(props) => (props.href === props.$currentPath ? "var(--uncapped-node-color)" : "var(--icon-border-color)")};
    border-radius: 0.2rem;
    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 5px #596e92;
    }
`;

export const ClassIcon: FC<ClassIconProps> = ({ href, src }) => {
    const currentPath = usePathname();
    return (
        <Link href={href}>
            <ButtonStyled $backgroundImage={src} tabIndex={-1} href={href} $currentPath={currentPath} />
        </Link>
    );
};
