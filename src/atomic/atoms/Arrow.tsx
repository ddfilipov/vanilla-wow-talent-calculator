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
    z-index: 4;
    position: relative;
    /* width: 100%; width of the rectangle part */
    /* height: 50px; height of the rectangle part */

    width: ${(props) => (props.$isVerticalArrow ? "12%" : "calc(85% - 38px)")};
    height: ${(props) => (props.$isVerticalArrow ? "calc(85% - 38px)" : "12%")};
`;
const ArrowHead = styled.div<{ $isVerticalArrow: boolean }>`
    position: absolute;
    right: -10px; /* position the arrowhead */
    top: ${(props) => (props.$isVerticalArrow ? "100%" : "50%")};
    width: 0;
    height: 0;
    border-left: 10px solid #ffd100; /* size and color of the arrowhead */
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    transform: translateY(-50%); /* center the arrowhead */
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
        >
            <ArrowHead $isVerticalArrow={isVericalArrow} />
        </StyledTestArrow>
    );
};
