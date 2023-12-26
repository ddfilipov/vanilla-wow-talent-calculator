"use client";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

export interface TalentTooltipProps {
    talentName: string;
    currentPoints: number;
    maxPoints: number;
    isNodeUntouched: boolean;
    isNodeCapped: boolean;
    ranksDescription: string[];
    isNodeReachable: boolean;
    pointsNeededToUnlock: number;
    referece: any;
    isEnoughSpaceToTheRight: boolean;
}

const Container = styled.div<{ $isEnoughSpaceToTheRight: boolean }>`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    bottom: 40px;
    ${(props) => (props.$isEnoughSpaceToTheRight ? "left: 40px;" : "right: 40px;")}
    z-index: 1;
    background-color: rgba(5, 12, 24, 0.8);
    border: 1px solid var(--main-area-border);
    border-radius: 0.3rem;
    padding: 8px;
    white-space: normal;
    min-width: 250px;
    word-wrap: break-word;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
const TalentName = styled.div`
    flex-basis: 100%;
    font-size: 1rem;
`;
const CurrentRank = styled.div`
    flex-basis: 100%;
    font-size: 0.9rem;
`;
const RankDescription = styled.div`
    flex-basis: 100%;
    font-size: 0.9rem;
    color: var(--tooltip-description);
`;

const LearnableNode = styled.div<{ $isNodeLearnable: boolean; $isNodeReachable: boolean }>`
    font-size: 0.9rem;
    color: ${(props) =>
        props.$isNodeLearnable && props.$isNodeReachable ? "var(--learnable-talent)" : "var(--unlearn-talent-color)"};
`;

export const TalentTooltip: FC<TalentTooltipProps> = ({
    currentPoints,
    maxPoints,
    isNodeCapped,
    isNodeUntouched,
    ranksDescription,
    talentName,
    isNodeReachable,
    pointsNeededToUnlock,
    referece,
    isEnoughSpaceToTheRight,
}) => {
    const [actionDescription, setActionDescription] = useState<string>("Click to learn");
    // TODO: not the best way but it is what it is. I'm having issues calculating the space to the right cuz the component
    // doesn't have space at first but when I hover onto the node it does have and its a shitshow
    const [delayedSpaceToTheRight, setDelayedSpaceToTheRight] = useState<boolean>(true);

    useEffect(() => {
        if (isNodeCapped) {
            setActionDescription("Right-click to unlearn");
            return;
        }
        if (isNodeUntouched && isNodeReachable) {
            setActionDescription("Click to learn");
            return;
        } else {
            setActionDescription(`Requires ${pointsNeededToUnlock} points in tree to unlock`);
            return;
        }
    }, [isNodeCapped, isNodeUntouched, isNodeReachable]);

    useEffect(() => {
        setDelayedSpaceToTheRight(isEnoughSpaceToTheRight);
    }, [isEnoughSpaceToTheRight]);
    return (
        <Container ref={referece} $isEnoughSpaceToTheRight={delayedSpaceToTheRight}>
            <Background />
            <TalentName>{talentName}</TalentName>
            <CurrentRank>{`Rank ${currentPoints}/${maxPoints}`}</CurrentRank>
            {ranksDescription?.[0]?.length > 0 ? <RankDescription>{ranksDescription[0]}</RankDescription> : null}

            {ranksDescription?.[1]?.length > 0 ? (
                <>
                    {currentPoints > 0 ? <div style={{ fontSize: "0.9rem", marginTop: "10px" }}>Next rank:</div> : null}
                    <RankDescription>{ranksDescription[1]}</RankDescription>
                </>
            ) : null}
            {isNodeCapped || isNodeUntouched ? (
                <LearnableNode $isNodeLearnable={isNodeUntouched} $isNodeReachable={isNodeReachable}>
                    {actionDescription}
                </LearnableNode>
            ) : null}
        </Container>
    );
};
