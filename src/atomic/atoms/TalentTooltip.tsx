"use client";
import { FC } from "react";
import styled from "styled-components";
import { TooltipStyle } from "./TalentNode";

export interface TalentTooltipProps {
    prop1: any;
}

const Container = styled.div`
    position: absolute;
    background-color: red;
    white-space: nowrap;
    transform: translate(30%, -400%);
    z-index: 3;
`;

export const TalentTooltip: FC<TalentTooltipProps> = () => {
    return <Container>Hello I'm a tooltip</Container>;
};
