"use client";
import { FC } from "react";
import styled from "styled-components";
import { TooltipStyle } from "./TalentNode";

export interface TalentTooltipProps {
    prop1: any;
}

const Container = styled.div`
    position: absolute;
    display: flex;
    bottom: 40px;
    left: 40px;
    z-index: 3;
    background-color: var(--main-area-background);
    border: 1px solid var(--main-area-border);
    border-radius: 0.3rem;
    padding: 5px;
    opacity: 0.8;
    white-space: normal;
    min-width: 250px;
    word-wrap: break-word;
`;

const TalentName = styled.div``;
const CurrentRank = styled.div``;
const RankDescription = styled.div``;
const LearnableNode = styled.div``; //TODO: if no ranks: "Click to learn" if max ranked: "Right-click to unlearn"

export const TalentTooltip: FC<TalentTooltipProps> = () => {
    return (
        <Container>
            Hello this is a long text and it's not occupying 150px, it's occupying way less occupying way lessoccupying
            way less occupying way less
        </Container>
    );
};
