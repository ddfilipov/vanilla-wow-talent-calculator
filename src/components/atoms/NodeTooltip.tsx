import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISpecTalents, ITalentRanks } from "../../interfaces";

interface NodeTooltipStyle {
    maxTalentRanks: number;
}

const Container = styled.div<NodeTooltipStyle>`
    display: grid;
    grid-template-columns: [c1-start] 40px [c2] 40px [c3-end];
    grid-template-rows: [r1-start] 40px [r2] 40px [r3] 40px [r4];
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    width: 300px;
    height: 150px;
`;

const TalentNameStyled = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: red;
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
        return <div>{description?.rankDescription}</div>;
    };

    return (
        <Container maxTalentRanks={nodeFields.ranks.length}>
            <TalentNameStyled>{nodeFields.talentNodeName}</TalentNameStyled>
            <div>Rank {getNextRank()}</div>
            {mapCurrentRank()}
        </Container>
    );
};
