"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styled from "styled-components";

export interface TalentNodeProps {
    src: string;
    talentRow: number;
    talentColumn: number;
}
interface IStyledNode {
    $backgroundImage: string;
    $talentRow: number;
    $talentColumn: number;
}

const ButtonStyled = styled.button<IStyledNode>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.$backgroundImage});
    border: 2px solid #212e46;
    cursor: pointer;
    border-radius: 0.2rem;
    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 5px #596e92;
    }
    grid-area: {
        ${(props) => props.$talentRow / props.$talentRow + 1 / props.$talentColumn / props.$talentColumn + 1}
    }
`;

export const TalentNode: FC<TalentNodeProps> = ({ src, talentRow, talentColumn }) => {
    const currentPath = usePathname();
    return (
        <ButtonStyled
            // $backgroundImage={src}
            $talentRow={talentRow}
            $talentColumn={talentColumn}
            $backgroundImage={`/images/talent-icons/${src}.jpg`}
        />
    );
};
