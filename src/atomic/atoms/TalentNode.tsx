"use client";
import { FC, MouseEvent } from "react";
import styled from "styled-components";
import { RemainingPointsActionType } from "../organisms/TalentCalculator";

export interface TalentNodeProps {
    src: string;
    talentRow: number;
    talentColumn: number;
    handleRemainingPoints: (action: RemainingPointsActionType) => void;
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
    //TODO: should have 3 colors: --uncapped-node-color, --capped-node-color, --main-area-border
    border: 2px solid var(--main-area-border);
    cursor: pointer;
    border-radius: 0.3rem;
    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 5px #596e92;
    }
    grid-row-start: ${(props) => props.$talentRow};
    grid-column-start: ${(props) => props.$talentColumn};
    z-index: 1;
`;

export const TalentNode: FC<TalentNodeProps> = ({ src, talentRow, talentColumn, handleRemainingPoints }) => {
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (event.type === "click") {
            handleRemainingPoints("lvlUp");
        } else if (event.type === "contextmenu") {
            handleRemainingPoints("lvlDown");
        }
    };

    return (
        <ButtonStyled
            $talentRow={talentRow}
            $talentColumn={talentColumn}
            $backgroundImage={`/images/talent-icons/${src}.jpg`}
            onClick={handleClick}
            onContextMenu={handleClick}
        />
    );
};
