import { FC } from "react";
import styled from "styled-components";
import { ITalentNode } from "../../interfaces";

interface NodeTooltipStyle {
    maxTalentRanks: number;
}

const Container = styled.div<NodeTooltipStyle>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    row-gap: 5px;;
    border: 1px solid white;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.9);
    position: relative;
    z-index: 1000;
    min-width: 300px;
    min-height: 100px;
    padding: 5px;
`;

const UpperPartStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
`;

const TalentNameStyled = styled.div`
    flex-grow: 4;
`;

const RankStyled = styled.div`
    flex-grow: 1;
    text-align: center;
    color: var(--tooltip-rank);
`;
const DescriptionStyled = styled.div`
    color: var(--tooltip-description);
`;

const InfoStyled = styled.div`
    flex-basis: 100%;
    text-align: right;
    align-self: center;
    color: var(--learnable-talent);
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
                    <span>
                        <span>Current rank</span>
                        <DescriptionStyled>{previousRank.rankDescription}</DescriptionStyled>
                    </span>
                ) : null}

                {nextRank?.rankDescription ? (
                    <span>
                        <span>Next rank:</span>
                        <DescriptionStyled>{nextRank.rankDescription}</DescriptionStyled>
                    </span>
                ) : null}
            </>
        );
    };

    return (
        <Container maxTalentRanks={nodeFields.ranks.length}>
            <UpperPartStyled>
                <TalentNameStyled>{nodeFields.talentNodeName}</TalentNameStyled>
                <RankStyled>Rank {getNextRank()}</RankStyled>
            </UpperPartStyled>
            {mapCurrentRank()}
            <InfoStyled>Click to level up</InfoStyled>
        </Container>
    );
};
