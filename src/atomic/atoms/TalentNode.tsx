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
    height: 10px;
    width: 20px;
    bottom: 5px;
    left: 18px;
    background-color: red;
    justify-content: right;
    //TODO: should have 3 colors: --uncapped-node-color, --capped-node-color, --main-area-border
    z-index: 1;
    span {
        position: relative;
        font-size: 0.6rem;
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
            <StyledPointsContainer>
                <span>0/5</span>
            </StyledPointsContainer>
        </Container>
    );
};
