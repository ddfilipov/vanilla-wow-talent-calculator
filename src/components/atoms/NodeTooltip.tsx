import { FC } from "react";
import styled from "styled-components";
import { ITalentNode } from "../../interfaces";

interface NodeTooltipStyle {
    maxTalentRanks: number;
}

const Container = styled.div<NodeTooltipStyle>`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid white;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 1000;
    width: 300px;
    height: 150px;
    padding: 5px;
`;

const TalentNameStyled = styled.div`
    flex-grow: 4;
`;

const RankStyled = styled.div`
    flex-grow: 1;
    text-align: center;
`;
const DescriptionStyled = styled.div``;

const InfoStyled = styled.div`
    flex-basis: 100%;
    text-align: right;
    align-self: center;
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
        const previousRank = nodeFields.ranks.find((talent, index) => index === currentNodeRank - 1);
        const nextRank = nodeFields.ranks.find((talent, index) => index === currentNodeRank);
        console.log("currentRank:", previousRank);
        console.log("nextRank:", nextRank);
        return (
            <>
                {previousRank?.rankDescription ? (
                    <>
                        <p>Current rank</p>
                        <DescriptionStyled>{previousRank.rankDescription}</DescriptionStyled>
                    </>
                ) : null}

                {nextRank?.rankDescription ? (
                    <>
                        <p>Next rank</p>
                        <DescriptionStyled>{nextRank.rankDescription}</DescriptionStyled>
                    </>
                ) : null}
            </>
        );
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
