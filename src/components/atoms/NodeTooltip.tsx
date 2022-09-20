import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISpecTalents } from "../../interfaces";

const Container = styled.div`
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
    const mapCurrentRank = () => {
        return <p>a</p>;
        // return <p>{nodeFields.ranks.find((rank) => console.log("helloooooo", rank))}</p>;
        // return nodeFields.ranks.map((rank, index) => {
        //     <p>{rank.rankDescription}</p>;
        // });
    };

    return (
        <Container>
            <div>{nodeFields.talentNodeName}</div>
            <div>Rank {currentNodeRank + 1}</div>
            {/* {mapCurrentRank} if I uncomment this I get an error. Investigade*/}
        </Container>
    );
};
