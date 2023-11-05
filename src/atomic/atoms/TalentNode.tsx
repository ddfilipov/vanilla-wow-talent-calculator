"use client";
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
    grid-row-start: ${(props) => props.$talentRow};
    grid-column-start: ${(props) => props.$talentColumn};
`;

export const TalentNode: FC<TalentNodeProps> = ({ src, talentRow, talentColumn }) => {
    return (
        <ButtonStyled
            $talentRow={talentRow}
            $talentColumn={talentColumn}
            $backgroundImage={`/images/talent-icons/${src}.jpg`}
        />
    );
};
