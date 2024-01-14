"use client";
import { breakpoints } from "@/styles/breakpoints";
import { FC, useEffect, useRef, useState } from "react";
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
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    z-index: 1;
    background-color: rgba(5, 12, 24, 0.8);
    border: 1px solid var(--main-area-border);
    border-radius: 0.3rem;
    padding: 8px;
    white-space: normal;
    max-width: 350px;
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

const StyledTouchButtons = styled.div`

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
}) => {
    const [actionDescription, setActionDescription] = useState<string>("Click to learn");
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [window.innerWidth]);

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
    }, [isNodeCapped, isNodeUntouched, isNodeReachable, pointsNeededToUnlock]);

    return (
        <Container ref={referece}>
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
            {windowWidth < 768 && (
                <StyledTouchButtons>
                    <button>ARRIBA</button>
                    <button>ABAJO</button>
                </StyledTouchButtons>
            )}
        </Container>
    );
};
