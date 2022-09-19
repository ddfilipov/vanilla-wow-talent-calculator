import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid white;
    background: rgba(0, 0, 0, 0.5);
    width: 120px;
    height: 35px;
    z-index: 6;
`;

export const NodeTooltip: FC = ({}) => {
    return <Container>I'M A TOOLTIP!</Container>;
};
