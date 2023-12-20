"use client";
import { FC, Fragment, createContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { SpecTalent } from "@/data/classData";
import { TalentNode } from "../atoms/TalentNode";
import Image from "next/image";
import { Arrow } from "../atoms/Arrow";
import { RemainingPointsActionType } from "./TalentCalculator";

interface IStyledContainer {
    $backgroundImage: string;
}

const MainContainer = styled.div`
    min-height: 500px;
    min-width: 280px;
    display: grid;
    grid-template-rows: 2.5rem 1fr;
    border: 1px solid var(--main-area-border);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 5px;
    gap: 10px;
    border: 1px solid var(--main-area-border);
    img {
        border-radius: 1rem;
    }
    /* TODO: maybe use a styled component instead of :last-child? */
    :last-child {
        margin-left: auto;
        background-color: transparent;
        color: var(--red-reset-color);
        font-weight: bold;
        border-radius: 0.3rem;
        padding: 0.2rem 0.4rem;
        border-width: 1px;
        border-color: #121822; //TODO: should use a var
        cursor: pointer;
        &:hover {
            box-shadow: inset 0 0 5px #596e92;
        }
    }
`;

const TalentGrid = styled.div<IStyledContainer>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    place-items: center;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: 100% 100%;
`;

export interface IUnlockableNodes {
    nodeId: number;
    unlockedById: number | undefined;
    unlocksId: number | number[] | undefined;
    pointsSpent: number;
    maxPoints: number;
    pointsNeededToUnlock: number;
}

export const UnlockableNodesContext = createContext<{
    unlockableNodes: (IUnlockableNodes | undefined)[];
    handleUnlockableNodes: (action: RemainingPointsActionType, nodeId: number) => void;
    highestMilestone: number;
}>({
    unlockableNodes: [undefined],
    handleUnlockableNodes: (action: RemainingPointsActionType, nodeId: number) => {},
    highestMilestone: 0,
});

interface TalentTreeProps {
    specName: string;
    specIcon: string;
    specBackground: string;
    specData: SpecTalent[];
    handleRemainingPoints: (action: RemainingPointsActionType, pointsDistributionIndex: number) => void;
    specIndex: number;
    resetSpecPoints: (pointsDistributionIndex: number) => void;
    pointsSpentOnTree: number;
}

export const TalentTree: FC<TalentTreeProps> = ({
    specName,
    specData,
    specIcon,
    specBackground,
    handleRemainingPoints,
    specIndex,
    resetSpecPoints,
    pointsSpentOnTree,
}) => {
    const [resetCounter, setResetCounter] = useState<number>(0);
    const [highestMilestone, setHighestMilestone] = useState<number>(0);

    const handleReset = () => {
        setResetCounter((prevCounter) => prevCounter + 1);
        resetSpecPoints(specIndex);
        setUnlockableNodes(defaultUnlockableNodes);
    };

    const defaultUnlockableNodes: (IUnlockableNodes | undefined)[] = useMemo(() => {
        const filteredNodes: IUnlockableNodes[] = specData
            .map((node) => {
                return {
                    nodeId: node.talentId,
                    unlockedById: node.unlockedById,
                    unlocksId: node.unlocksId,
                    pointsSpent: 0,
                    maxPoints: node.ranksNumber,
                    pointsNeededToUnlock: node.pointsNeededToUnlock,
                };
            })
            .filter((node) => node);
        return filteredNodes;
    }, []);
    const [unlockableNodes, setUnlockableNodes] = useState<(IUnlockableNodes | undefined)[]>(defaultUnlockableNodes);
    const handleUnlockableNodes = (action: RemainingPointsActionType, nodeId: number) => {
        const numberToAdd = action === "lvlUp" ? 1 : -1;
        setUnlockableNodes((nodes) =>
            nodes.map((node) => {
                if (node?.nodeId === nodeId) {
                    return { ...node, pointsSpent: node.pointsSpent + numberToAdd };
                }
                return node;
            })
        );
    };

    const isNodeUnlockable = (nodeId: number, unlockedId?: number, indice: number) => {
        // console.log("entrando en funcion de los cojones con este nodeId:", nodeId, "y este unlockedId:", unlockedId);
        // check if parent is maxed
        const checkIsParentNodeCapped = isParentNodeCapped(nodeId);
        let checkIsUnlockableNodeUnlockable = true;
        // if (unlockedId) {
        checkIsUnlockableNodeUnlockable = isUnlockableNodeUnlockable(nodeId, unlockedId, indice);
        // console.log("unlockableNodes:", unlockableNodes);
        // console.log("pointsSpentOnTree:", pointsSpentOnTree);
        console.log("checkIsUnlockableNodeUnlockable:", checkIsUnlockableNodeUnlockable);
        // console.log("unlockedId:", unlockedId);
        // isUnlockableNodeUnlockable(nodeId, unlockedId, indice);
        // }
        // const checkIsUnlockableNodeUnlockable = isUnlockableNodeUnlockable(unlockedId);
        // console.log("checkIsUnlockableNodeUnlockable:", checkIsUnlockableNodeUnlockable);
        // console.log("checkIsParentNodeCapped:", checkIsParentNodeCapped);
        // also check if points spent on this tree are enoough to unlock the "unlocked" node
        // console.log("este es tu found node:;", foundNode);
        // if (nodeId === 763) {
        //     console.log("unlockableNodes:", unlockableNodes);
        //     console.log("pointsSpentOnTree:", pointsSpentOnTree);
        //     console.log("nodeId:", nodeId);
        //     console.log("unlocksId:", unlockedId);
        //     isUnlockableNodeUnlockable(nodeId);
        // }
        return checkIsParentNodeCapped && checkIsUnlockableNodeUnlockable;
    };

    const isParentNodeCapped = (nodeId: number) => {
        // check if parent is maxed
        const foundNode = unlockableNodes.find((node) => node?.nodeId === nodeId);
        if (foundNode) {
            return foundNode.pointsSpent === foundNode.maxPoints;
        }
        return false;
    };

    const isUnlockableNodeUnlockable = (nodeId: number, unlockedId?: number, indice: number) => {
        // console.log(JSON.stringify(unlockableNodes));
        // console.log("ppppppp indice:", indice);
        // console.log("ppppppp unlockedId:", unlockedId);
        const prueba = unlockableNodes.find((node) => node?.nodeId === nodeId);
        // console.log(prueba);
        // const prueba = unlockableNodes.find((node) => node?.nodeId === nodeId)?.unlocksId[indice];
        // const foundNode = unlockableNodes.find((node) => node?.unlockedById === nodeId && node.nodeId === unlockedId);
        let foundNode;
        if (Array.isArray(prueba?.unlocksId)) {
            console.log("est id:", prueba, " es array");
            foundNode = unlockableNodes.find((node) => node.nodeId === prueba.unlocksId[indice]);
            console.log("foundNode:", foundNode, " foundNode");
        } else {
            foundNode = unlockableNodes.find((node) => node.nodeId === prueba.unlocksId);
        }
        // console.log("9999 prueba:", prueba);
        if (foundNode) {
            // console.log("found Node nuevoooo:", pointsSpentOnTree >= foundNode.pointsNeededToUnlock);
            return pointsSpentOnTree >= foundNode.pointsNeededToUnlock;
        }
        return false;
    };

    useEffect(() => {
        const reversedNodes = [...unlockableNodes].reverse();
        const highestMilestone = reversedNodes.find(
            (node) => node?.pointsSpent && node?.pointsSpent > 0
        )?.pointsNeededToUnlock;
        setHighestMilestone(highestMilestone as number);
    }, [unlockableNodes]);

    return (
        <UnlockableNodesContext.Provider
            value={{
                unlockableNodes: unlockableNodes,
                handleUnlockableNodes: handleUnlockableNodes,
                highestMilestone: highestMilestone,
            }}
        >
            <MainContainer>
                <Header>
                    <Image
                        src={`/images/talent-icons/${specIcon}.jpg`}
                        width={26}
                        height={26}
                        alt="Picture of the author"
                    />
                    <h3>{specName}</h3>
                    <span style={{ color: "gray" }}>({pointsSpentOnTree})</span>
                    <button type="button" onClick={handleReset}>
                        X
                    </button>
                </Header>
                <TalentGrid $backgroundImage={`/images/spec-backgrounds/${specBackground}.jpg`}>
                    {specData.map((node, indice) => {
                        return (
                            <Fragment key={node.talentId}>
                                <TalentNode
                                    src={node.talentIcon.toLocaleLowerCase()}
                                    talentRow={node.talentRow}
                                    talentColumn={node.talentcolumn}
                                    handleRemainingPoints={handleRemainingPoints}
                                    maxPoints={node.ranksNumber}
                                    specIndex={specIndex}
                                    resetSignal={resetCounter}
                                    pointsSpentOnTree={pointsSpentOnTree}
                                    pointsNeededToUnluck={node.pointsNeededToUnlock}
                                    ranksDescription={node.ranksDescription}
                                    talentName={node.talentName}
                                    unlocksId={node.unlocksId}
                                    unlockedBy={node.unlockedById}
                                    nodeId={node.talentId}
                                />
                                {/* //TODO: shouldn't do this here, should do it in the Arrow compontent */}
                                {node.unlocks && node.unlocks?.length > 0
                                    ? node.unlocks.map((arrowArray, index) => {
                                          if (Array.isArray(arrowArray)) {
                                              //   console.log("node.unlockedByIdnode.unlockedByIdnode.unlockedById:", node);
                                              return arrowArray.map((arrowSegment, arrowSegmentIndex) => {
                                                  // console.log("asdasdasd arrowSegment:", arrowSegment.truco);
                                                  return arrowSegmentIndex === 0 ? (
                                                      <Arrow
                                                          startingRow={node.talentRow}
                                                          endingRow={arrowArray[arrowSegmentIndex].row}
                                                          startingColumn={node.talentcolumn}
                                                          endingColumn={arrowArray[arrowSegmentIndex].column}
                                                          arrowIndex={arrowSegmentIndex}
                                                          key={arrowSegmentIndex}
                                                          hasArrowhead={arrowArray.length === 0}
                                                          hasTurns={arrowArray.length > 1}
                                                          parentNodeCapped={isNodeUnlockable(
                                                              node.talentId,
                                                              arrowSegment.truco,
                                                              index
                                                          )}
                                                      />
                                                  ) : (
                                                      <Arrow
                                                          startingRow={arrowArray[0].row}
                                                          endingRow={arrowSegment.row}
                                                          startingColumn={arrowArray[0].column}
                                                          endingColumn={arrowSegment.column}
                                                          arrowIndex={arrowSegmentIndex}
                                                          key={arrowSegmentIndex}
                                                          hasArrowhead={true}
                                                          hasTurns
                                                          parentNodeCapped={isNodeUnlockable(
                                                              node.talentId,
                                                              arrowSegment.truco,
                                                              index
                                                          )}
                                                      />
                                                  );
                                              });
                                          }
                                      })
                                    : null}
                            </Fragment>
                        );
                    })}
                </TalentGrid>
            </MainContainer>
        </UnlockableNodesContext.Provider>
    );
};
