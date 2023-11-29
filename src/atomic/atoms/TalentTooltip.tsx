"use client";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

export interface TalentTooltipProps {
    talentName: string;
    currentPoints: number;
    maxPoints: number;
    isUntrained: boolean;
    isCapped: boolean;
    ranksDescription: string[];
}

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    bottom: 40px;
    left: 40px;
    z-index: 3;
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
    opacity: 0.8;
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

const LearnableNode = styled.div<{ isNodeLearnable: boolean }>`
    color: ${(props) => (props.isNodeLearnable ? "var(--learnable-talent)" : "var(--unlearn-talent-color)")};
`;

export const TalentTooltip: FC<TalentTooltipProps> = ({
    currentPoints,
    maxPoints,
    isCapped,
    isUntrained,
    ranksDescription,
    talentName,
}) => {
    const [actionDescription, setActionDescription] = useState<string>("Click to learn");

    useEffect(() => {
        if (isCapped) {
            setActionDescription("Right-click to unlearn");
            return;
        }
        if (isUntrained) {
            setActionDescription("Click to learn");
        }
    }, [isCapped, isUntrained]);
    return (
        <Container>
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
            {isCapped || isUntrained ? (
                <LearnableNode isNodeLearnable={isUntrained}>{actionDescription}</LearnableNode>
            ) : null}
        </Container>
    );
};
