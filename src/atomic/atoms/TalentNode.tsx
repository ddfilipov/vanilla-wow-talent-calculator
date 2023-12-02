"use client";
import { FC, MouseEvent, useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { PointsLeftContext, RemainingPointsActionType } from "../organisms/TalentCalculator";
import { TalentNodePoints } from "./TalentNodePoints";
import { TalentTooltip } from "./TalentTooltip";
import { UnlockableNodesContext } from "../organisms/TalentTree";

const Container = styled.div<IStyledContainer>`
    position: relative;
    height: 40px;
    width: 38px;
    border-radius: 0.3rem;
    grid-row-start: ${(props) => props.$talentRow};
    grid-column-start: ${(props) => props.$talentColumn};
    button {
        filter: ${(props) => (props.$grayed ? "grayscale(100%)" : "default")};
    }
    span {
        filter: ${(props) => (props.$grayed ? "grayscale(100%)" : "default")};
    }
    border: ${(props) =>
        `1px solid ${handleColorType(props.$remainingPoints, props.$cappedNode, props.$currentPoints, props.$grayed)}`};

    span {
        color: ${(props) =>
            handleColorType(props.$remainingPoints, props.$cappedNode, props.$currentPoints, props.$grayed)};
    }
`;

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
    $remainingPoints: number;
    $currentPoints: number;
    $grayed: boolean;
    $cappedNode: boolean;
}
const handleColorType = (remainingPoints: number, cappedNode: boolean, currentPoints: number, grayed: boolean) => {
    if (grayed) {
        return "gray";
    } else if (cappedNode) {
        return "var(--capped-node-color)";
    } else if (remainingPoints > 0 || (remainingPoints === 0 && currentPoints >= 0)) {
        return "var(--uncapped-node-color)";
    }
};
export interface TooltipStyle {
    top: number;
    left: number;
}

export interface TalentNodeProps {
    nodeId: number;
    src: string;
    talentRow: number;
    talentColumn: number;
    handleRemainingPoints: (action: RemainingPointsActionType, pointsDistributionIndex: number) => void;
    maxPoints: number;
    specIndex: number;
    resetSignal: number;
    pointsSpentOnTree: number;
    pointsNeededToUnluck: number;
    ranksDescription: string[];
    talentName: string;
    unlocksId: number | undefined;
    unlockedBy: number | undefined;
}
export const TalentNode: FC<TalentNodeProps> = ({
    nodeId,
    src,
    talentRow,
    talentColumn,
    handleRemainingPoints,
    maxPoints,
    specIndex,
    resetSignal,
    pointsSpentOnTree,
    pointsNeededToUnluck,
    ranksDescription,
    talentName,
    unlocksId,
    unlockedBy,
}) => {
    const [currentPoints, setCurrentPoints] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const remainingPoints: number = useContext(PointsLeftContext);
    const { unlockableNodes, handleUnlockableNodes } = useContext(UnlockableNodesContext);

    const parentNode = useMemo(() => {
        return unlockableNodes.find((node) => node?.unlocksId === nodeId);
    }, [unlockableNodes, resetSignal]);

    const childNode = useMemo(() => {
        return unlockableNodes.find((node) => node?.unlockedById === nodeId);
    }, [unlockableNodes, resetSignal]);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (event.type === "click" && remainingPoints > 0) {
            if (currentPoints < maxPoints && pointsSpentOnTree >= pointsNeededToUnluck) {
                if (unlockedBy || unlocksId) {
                    // const parentNode = unlockableNodes.find((node) => node?.unlocksId === nodeId);
                    if (parentNode && parentNode?.pointsSpent < parentNode?.maxPoints) {
                        return;
                    }
                    handleUnlockableNodes("lvlUp", nodeId);
                }
                handleRemainingPoints("lvlUp", specIndex);
                setCurrentPoints(currentPoints + 1);
            }
        } else if (event.type === "contextmenu") {
            if (currentPoints > 0 && pointsNeededToUnluck < pointsSpentOnTree) {
                // const childNode = unlockableNodes.find((node) => node?.unlockedById === nodeId);
                if (unlockedBy || unlocksId) {
                    if (childNode && childNode?.pointsSpent > 0) {
                        return;
                    }
                    handleUnlockableNodes("lvlDown", nodeId);
                }
                handleRemainingPoints("lvlDown", specIndex);
                setCurrentPoints(currentPoints - 1);
            }
        }
    };

    const handleOnMouseEnter = () => {
        setIsHovered(true);
    };

    useEffect(() => {
        setCurrentPoints(0);
    }, [resetSignal]);

    return (
        <>
            <Container
                $talentRow={talentRow}
                $talentColumn={talentColumn}
                $cappedNode={currentPoints === maxPoints}
                $grayed={
                    pointsSpentOnTree < pointsNeededToUnluck ||
                    (remainingPoints === 0 && currentPoints === 0) ||
                    ((parentNode && (parentNode?.pointsSpent < parentNode?.maxPoints ?? false)) ?? false)
                }
                $remainingPoints={remainingPoints}
                $currentPoints={currentPoints}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ButtonStyled
                    $backgroundImage={`/images/talent-icons/${src}.jpg`}
                    onClick={handleClick}
                    onContextMenu={handleClick}
                />
                {/* <div style={{ position: "absolute", color: "yellow", zIndex: "333" }}>
                    <div style={{ color: "yellow", fontSize: "10px" }}>nodeId:{nodeId}</div>
                    <div style={{ color: "red", fontSize: "10px" }}>unlocksId:{unlocksId}</div>
                    <div style={{ color: "orange", fontSize: "10px" }}>unlockedBy:{unlockedBy}</div>
                </div> */}
                {remainingPoints > 0 || currentPoints > 0 ? (
                    <TalentNodePoints currentPoints={currentPoints} maxPoints={maxPoints} />
                ) : null}
                {isHovered ? (
                    <TalentTooltip
                        currentPoints={currentPoints}
                        maxPoints={maxPoints}
                        isNodeCapped={currentPoints === maxPoints}
                        isNodeUntouched={currentPoints === 0}
                        ranksDescription={[ranksDescription[currentPoints - 1], ranksDescription[currentPoints]]}
                        talentName={talentName}
                    />
                ) : null}
            </Container>
        </>
    );
};
