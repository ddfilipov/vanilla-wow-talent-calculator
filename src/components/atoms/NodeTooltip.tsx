import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISpecTalents, ITalentRanks } from "../../interfaces";

interface NodeTooltipStyle {
    maxTalentRanks: number;
}

const Container = styled.div<NodeTooltipStyle>`
    display: grid;
    grid-template-columns: [c1-start] auto [c2] auto [c3-end];
    grid-template-rows: [r1-start] auto [r2] auto [r3] auto [r4];
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 1000;
    width: 300px;
    height: 150px;
    padding: 5px;
`;

const TalentNameStyled = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
`;

const RankStyled = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
`;

const DescriptionStyled = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const InfoStyled = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
`;

interface NodeTooltipProps {
    nodeFields: ISpecTalents;
    currentNodeRank: number;
}

export const NodeTooltip: FC<NodeTooltipProps> = ({ nodeFields, currentNodeRank }) => {
    let maxTalentRanks: number = nodeFields.ranks.length;

    const getNextRank = () => {
        return maxTalentRanks > currentNodeRank ? currentNodeRank + 1 : currentNodeRank;
    };

    const mapCurrentRank = () => {
        const description = nodeFields.ranks.find((talent, index) => index === currentNodeRank);
        return <DescriptionStyled>{description?.rankDescription}</DescriptionStyled>;
    };

    return (
        <Container maxTalentRanks={nodeFields.ranks.length}>
            <TalentNameStyled>{nodeFields.talentNodeName}</TalentNameStyled>
            <RankStyled>Rank {getNextRank()}</RankStyled>
            {mapCurrentRank()}
            <InfoStyled>Click to level up</InfoStyled>
        </Container>
    );
};
