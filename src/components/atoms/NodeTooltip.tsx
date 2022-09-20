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

interface NodeTooltipProps{
    nodeFields: ISpecTalents;
}

export const NodeTooltip: FC<NodeTooltipProps> = ({nodeFields}) => {
    return <Container>I'M A TOOLTIP!</Container>;
};
