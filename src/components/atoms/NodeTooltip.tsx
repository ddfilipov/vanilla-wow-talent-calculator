import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISpecTalents, ITalentRanks } from "../../interfaces";

interface NodeTooltipStyle {
    maxTalentRanks: number;
}

const Container = styled.div<NodeTooltipStyle>`
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.5);
    width: 120px;
    height: 35px;
    z-index: 6;
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
            <div>{nodeFields.talentNodeName}</div>
            <div>Rank {getNextRank()}</div>
            {mapCurrentRank()}
        </Container>
    );
};
