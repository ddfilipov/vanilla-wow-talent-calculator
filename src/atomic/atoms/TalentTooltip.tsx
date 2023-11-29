"use client";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { TooltipStyle } from "./TalentNode";

export interface TalentTooltipProps {
    currentPoints: number;
    maxPoints: number;
    isUntrained: boolean;
    isCapped: boolean;
}

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    bottom: 40px;
    left: 40px;
    z-index: 3; //TODO: other talent nodes are on top of the tooltip wtf!
    /* background-color: var(--main-area-background); */
    background-color: rgba(5, 12, 24, 0.8);
    border: 1px solid var(--main-area-border);
    border-radius: 0.3rem;
    padding: 8px;
    white-space: normal;
    min-width: 250px;
    word-wrap: break-word;
    text-align: justify;
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
    color: ${(props) => (props.isNodeLearnable ? "var(--learnable-talent)" : "var(--red-reset-color)")};
`; //TODO: if no ranks: "Click to learn" if max ranked: "Right-click to unlearn"

export const TalentTooltip: FC<TalentTooltipProps> = ({ currentPoints, maxPoints, isCapped, isUntrained }) => {
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
            <TalentName>Talent Name</TalentName>
            <CurrentRank>{`Rank ${currentPoints}/${maxPoints}`}</CurrentRank>
            <RankDescription>
                Hello this is a long text and it's not occupying 150px, it's occupying way less occupying way
                lessoccupying way less occupying way less
            </RankDescription>
            {isCapped || isUntrained ? (
                <LearnableNode isNodeLearnable={isUntrained}>{actionDescription}</LearnableNode>
            ) : null}
        </Container>
    );
};
