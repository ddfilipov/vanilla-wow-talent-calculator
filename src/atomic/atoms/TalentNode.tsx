"use client";
import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PointsLeftContext, RemainingPointsActionType } from "../organisms/TalentCalculator";
import { TalentNodePoints } from "./TalentNodePoints";

export interface TalentNodeProps {
    src: string;
    talentRow: number;
    talentColumn: number;
    handleRemainingPoints: (action: RemainingPointsActionType, pointsDistributionIndex: number) => void;
    maxPoints: number;
    specIndex: number;
    resetSignal: number;
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

export const TalentNode: FC<TalentNodeProps> = ({
    src,
    talentRow,
    talentColumn,
    handleRemainingPoints,
    maxPoints,
    specIndex,
    resetSignal,
}) => {
    const [currentPoints, setCurrentPoints] = useState<number>(0);
    const remainingPoints: number = useContext(PointsLeftContext);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (event.type === "click" && remainingPoints > 0) {
            if (currentPoints < maxPoints) {
                handleRemainingPoints("lvlUp", specIndex);
                setCurrentPoints(currentPoints + 1);
            }
        } else if (event.type === "contextmenu") {
            if (currentPoints > 0) {
                handleRemainingPoints("lvlDown", specIndex);
                setCurrentPoints(currentPoints - 1);
            }
        }
    };

    useEffect(() => {
        setCurrentPoints(0);
    }, [resetSignal]);

    return (
        <Container $talentRow={talentRow} $talentColumn={talentColumn}>
            <ButtonStyled
                $backgroundImage={`/images/talent-icons/${src}.jpg`}
                onClick={handleClick}
                onContextMenu={handleClick}
            />
            <TalentNodePoints currentPoints={currentPoints} maxPoints={maxPoints} />
        </Container>
    );
};
