import { FC } from "react";
import styled from "styled-components";
import { ITalentNode } from "../../interfaces";

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

const ContainerFlex = styled.div<NodeTooltipStyle>`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 1000;
    width: 300px;
    height: 150px;
    padding: 5px;
`;

const TalentNameFlexStyled = styled.div`
    flex-grow: 4;
`;

const RankFlexStyled = styled.div`
    flex-grow: 1;
`;
const DescriptionFlexStyled = styled.div``;

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

// TODO: maybe I should pass the max rank so I know where to stop showing descriptions?
interface NodeTooltipProps {
    nodeFields: ITalentNode;
    currentNodeRank: number;
}

export const NodeTooltip: FC<NodeTooltipProps> = ({ nodeFields, currentNodeRank }) => {
    let maxTalentRanks: number = nodeFields.ranks.length;

    const getNextRank = () => {
        return maxTalentRanks > currentNodeRank ? currentNodeRank + 1 : currentNodeRank;
    };

    const mapCurrentRank = () => {
        console.log("entering mapCurrentRank with currentNodeRank:", currentNodeRank);
        console.log("nodeFields.ranks:", nodeFields.ranks);
        const currentRank = nodeFields.ranks.find((talent, index) => index === currentNodeRank);
        const nextRank = nodeFields.ranks.find((talent, index) => index === currentNodeRank + 1);
        console.log("currentRank:", currentRank);
        console.log("nextRank:", nextRank);
        return (
            <>
                <DescriptionStyled>{currentRank?.rankDescription}</DescriptionStyled>
                <DescriptionStyled>{nextRank?.rankDescription}</DescriptionStyled>
            </>
        );
    };

    return (
        <ContainerFlex maxTalentRanks={nodeFields.ranks.length}>
            <TalentNameFlexStyled>{nodeFields.talentNodeName}</TalentNameFlexStyled>
            <RankFlexStyled>Rank {getNextRank()}</RankFlexStyled>
            {mapCurrentRank()}
            <InfoStyled>Click to level up</InfoStyled>
        </ContainerFlex>
    );
};
