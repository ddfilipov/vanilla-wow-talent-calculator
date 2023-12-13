"use client";
import { FC } from "react";
import styled from "styled-components";

export interface ArrowProps {
    startingRow: number;
    endingRow: number;
    startingColumn: number;
    endingColumn: number;
}

interface IArrow {
    $startingRow: number;
    $endingRow: number;
    $startingColumn: number;
    $endingColumn: number;
    $isVerticalArrow: boolean;
}

const StyledTestArrow = styled.div<IArrow>`
    grid-row-start: ${(props) => props.$startingRow};
    grid-row-end: ${(props) => props.$endingRow + 1};
    grid-column-start: ${(props) => props.$startingColumn};
    grid-column-end: ${(props) => props.$endingColumn + 1};
    background-color: #ffd100;
    transform: ${(props) => (props.$isVerticalArrow ? "rotate(90deg)" : "none")};
    width: 100%;
    /* width: ${(props) => (props.$isVerticalArrow ? "100%" : "30%")}; */
    height: 15px;
    z-index: 4;
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
`;

export const Arrow: FC<ArrowProps> = ({ startingRow, endingRow, startingColumn, endingColumn }) => {
    const isVericalArrow = startingColumn - endingColumn === 0;
    console.log("startingColumn:", startingColumn);
    console.log("endingColumn:", endingColumn);
    return (
        <StyledTestArrow
            $startingRow={startingRow}
            $endingRow={endingRow}
            $startingColumn={startingColumn}
            $endingColumn={endingColumn}
            $isVerticalArrow={isVericalArrow}
        />
    );
};
