"use client";
import { FC } from "react";
import styled from "styled-components";
import { TooltipStyle } from "./TalentNode";

export interface TalentTooltipProps {
    prop1: any;
}

const Container = styled.div`
    position: absolute;
    display: flex;
    background-color: red;
    white-space: normal;
    /* transform: translate(30%, -200%); */
    bottom: 40px;
    left: 40px;
    z-index: 3;
    min-width: 150px;
    word-wrap: break-word;
`;

export const TalentTooltip: FC<TalentTooltipProps> = () => {
    return (
        <Container>
            Hello this is a long text and it's not occupying 150px, it's occupying way less occupying way lessoccupying
            way less occupying way less
        </Container>
    );
};
