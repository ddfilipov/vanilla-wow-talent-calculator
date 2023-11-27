"use client";
import { FC } from "react";
import styled from "styled-components";
import { TooltipStyle } from "./TalentNode";

export interface TalentTooltipProps {
    tooltipStyle: TooltipStyle;
}

interface ITooltipStyle {
    $top: number;
    $left: number;
}

const Container = styled.div<ITooltipStyle>`
    position: absolute;
    background-color: red;
    white-space: nowrap;
    transform: translate(30%, -400%);
    z-index: 3;
    /* top: ${(props) => `${props.$left}px`};
    left: ${(props) => `${props.$top}px`}; */
    /* top: 100px; */
    /* left: 0px; */
`;

export const TalentTooltip: FC<TalentTooltipProps> = ({ tooltipStyle }) => {
    return (
        <Container $top={tooltipStyle.top} $left={tooltipStyle.left}>
            Hello I'm a tooltip
        </Container>
    );
};
