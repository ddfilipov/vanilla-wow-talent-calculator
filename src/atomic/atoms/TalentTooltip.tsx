"use client";
import { FC } from "react";
import styled from "styled-components";

export interface TalentTooltipProps {}

// interface IArrow {
//     $startingRow: number;
//     $endingRow: number;
//     $startingColumn: number;
//     $endingColumn: number;
//     $isVerticalArrow: boolean;
// }

const Container = styled.div`
    background-color: red;
`;

export const TalentTooltip: FC<TalentTooltipProps> = ({}) => {
    return <Container>Hello I'm a tooltip</Container>;
};
