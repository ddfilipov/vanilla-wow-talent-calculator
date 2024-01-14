"use client";
import { FC, MouseEvent, useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { PointsLeftContext, RemainingPointsActionType } from "../organisms/TalentCalculator";
import { TalentNodePoints } from "./TalentNodePoints";
import { TalentTooltip } from "./TalentTooltip";
import { IUnlockableNodes, UnlockableNodesContext } from "../organisms/TalentTree";
import { nodeCantLvlDown } from "@/utils/sharedFunctions";
import { Tooltip } from "react-tooltip";

const Container = styled.div<IStyledContainer>`
    position: relative;
    height: 40px;
    width: 38px;
    border-radius: 0.3rem;
    grid-row-start: ${(props) => props.$talentRow};
    grid-column-start: ${(props) => props.$talentColumn};
    order: 1; // most important prop, otherwise arow stays on top of the node, and we don't want that!
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
    cursor: pointer;
    border-radius: 0.3rem;
    &:hover {
        opacity: 1;
        box-shadow: inset 0 0 8px #596e92;
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
    pointsNeededToUnlock: number;
    ranksDescription: string[];
    talentName: string;
    unlocksId: number | number[] | undefined;
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
    pointsNeededToUnlock: pointsNeededToUnluck,
    ranksDescription,
    talentName,
    unlocksId,
    unlockedBy,
}) => {
    const tooltipRef = useRef<HTMLInputElement>(null);
    const [currentNodePoints, setCurrentNodePoints] = useState<number>(0);
    const remainingPoints: number = useContext(PointsLeftContext);
    const { unlockableNodes, handleUnlockableNodes, highestMilestone } = useContext(UnlockableNodesContext);

    const parentNode = useMemo(() => {
        return unlockableNodes.find((node) => {
            if (!Array.isArray(node?.unlocksId)) {
                return node?.unlocksId === nodeId;
            } else {
                return node?.unlocksId.find((x) => x === nodeId);
            }
        });
    }, [unlockableNodes, nodeId]);

    const childNodes = useMemo(() => {
        return unlockableNodes.filter((node) => node?.unlockedById === nodeId);
    }, [unlockableNodes, nodeId]);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (event.type === "click" && remainingPoints > 0) {
            if (currentNodePoints < maxPoints && pointsSpentOnTree >= pointsNeededToUnluck) {
                if (unlockedBy || unlocksId) {
                    if (parentNode && parentNode?.pointsSpent < parentNode?.maxPoints) {
                        return;
                    }
                }
                handleUnlockableNodes("lvlUp", nodeId);
                handleRemainingPoints("lvlUp", specIndex);
                setCurrentNodePoints(currentNodePoints + 1);
            }
        } else if (event.type === "contextmenu") {
            if (
                currentNodePoints > 0 && // can't lvl down unless I've put at least 1 point on this node
                pointsNeededToUnluck < pointsSpentOnTree // can't lvl down unless I've spent one point on this tree
            ) {
                if ((unlockedBy || unlocksId) && childNodes) {
                    if (childNodes.length === 0) {
                        if (childNodes?.[0]?.pointsSpent ?? 0 > 0) {
                            return;
                        }
                    } else {
                        const shouldLeave = childNodes?.some((x) => x?.pointsSpent ?? 0 > 0);
                        if (shouldLeave) {
                            return;
                        }
                    }
                }

                if (pointsNeededToUnluck < highestMilestone) {
                    const cantLvlUp = nodeCantLvlDown(
                        unlockableNodes as IUnlockableNodes[],
                        pointsNeededToUnluck,
                        highestMilestone
                    );
                    if (cantLvlUp) {
                        return;
                    }
                }
                handleUnlockableNodes("lvlDown", nodeId);
                handleRemainingPoints("lvlDown", specIndex);
                setCurrentNodePoints(currentNodePoints - 1);
            }
        }
    };

    useEffect(() => {
        setCurrentNodePoints(0);
    }, [resetSignal]);

    return (
        <>
            <Container
                $talentRow={talentRow}
                $talentColumn={talentColumn}
                $cappedNode={currentNodePoints === maxPoints}
                $grayed={
                    pointsSpentOnTree < pointsNeededToUnluck ||
                    (remainingPoints === 0 && currentNodePoints === 0) ||
                    ((parentNode && (parentNode?.pointsSpent < parentNode?.maxPoints ?? false)) ?? false)
                }
                $remainingPoints={remainingPoints}
                $currentPoints={currentNodePoints}
                data-tooltip-id={`${nodeId}_tooltip`}
            >
                {/* {nodeId} */}
                <ButtonStyled
                    $backgroundImage={`/images/talent-icons/${src}.jpg`}
                    onClick={handleClick}
                    onContextMenu={handleClick}
                />
                {remainingPoints > 0 || currentNodePoints > 0 ? (
                    <TalentNodePoints currentPoints={currentNodePoints} maxPoints={maxPoints} />
                ) : null}
            </Container>
            <Tooltip
                id={`${nodeId}_tooltip`}
                style={{ zIndex: 10 }}
                disableStyleInjection
                place={"top"}
                opacity={1}
                                children={
                    <TalentTooltip
                        currentPoints={currentNodePoints}
                        maxPoints={maxPoints}
                        isNodeCapped={currentNodePoints === maxPoints}
                        isNodeUntouched={currentNodePoints === 0}
                        ranksDescription={[
                            ranksDescription[currentNodePoints - 1],
                            ranksDescription[currentNodePoints],
                        ]}
                        talentName={talentName}
                        isNodeReachable={pointsSpentOnTree >= pointsNeededToUnluck}
                        pointsNeededToUnlock={pointsNeededToUnluck}
                        referece={tooltipRef}
                    />
                }
            />
        </>
    );
};
