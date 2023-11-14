"use client";
import { FC, MouseEvent } from "react";
import styled from "styled-components";
import { RemainingPointsActionType } from "../organisms/TalentCalculator";
import { TalentNodePoints } from "./TalentNodePoints";

export interface TalentNodeProps {
    src: string;
    talentRow: number;
    talentColumn: number;
    handleRemainingPoints: (action: RemainingPointsActionType) => void;
}
interface IStyledNode {
    $backgroundImage: string;
}

const ButtonStyled = styled.button<IStyledNode>`
    display: flex;
    height: 38px;
    width: 100%;
    background-image: url(${(props) => props.$backgroundImage});
    border: 1px solid var(--main-area-border);
    //TODO: should have 3 colors: --uncapped-node-color, --capped-node-color, --main-area-border
    cursor: pointer;
    border-radius: 0.3rem;
    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 5px #596e92;
    }
`;

interface IStyledContainer {
    $talentRow: number;
    $talentColumn: number;
}

const Container = styled.div<IStyledContainer>`
    height: 38px;
    width: 38px;
    //TODO: should have 3 colors: --uncapped-node-color, --capped-node-color, --main-area-border
    border-radius: 0.3rem;
    grid-row-start: ${(props) => props.$talentRow};
    grid-column-start: ${(props) => props.$talentColumn};
    z-index: 1;
`;
interface IStyledPointsContainer {}

const StyledPointsContainer = styled.div<IStyledPointsContainer>`
    display: flex;
    position: relative;
    height: 14px;
    width: 22px;
    bottom: 6px;
    left: 25px;
    background-color: black;
    padding: 1px;
    justify-content: right;
    border-radius: 0.3rem;
    z-index: 1;
    span {
        color: var(--uncapped-node-color);
        position: relative;
        font-size: 0.7rem;
        right: 1px;
    }
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
        <Container $talentRow={talentRow} $talentColumn={talentColumn}>
            <ButtonStyled
                $backgroundImage={`/images/talent-icons/${src}.jpg`}
                onClick={handleClick}
                onContextMenu={handleClick}
            />
            <TalentNodePoints currentPoints={0} maxPoints={5} />
        </Container>
    );
};
