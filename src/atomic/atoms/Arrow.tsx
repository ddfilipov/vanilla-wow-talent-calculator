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
    align-self: center;
    /* width: 100%; width of the rectangle part */
    bottom: ${(props) => (props.$isVerticalArrow ? "5px" : "0")};
    right: ${(props) => (props.$isVerticalArrow ? "0" : "5px")};
    width: ${(props) => (props.$isVerticalArrow ? "12%" : "calc(100% - 102px)")};
    height: ${(props) => (props.$isVerticalArrow ? "calc(100% - 102px)" : "12%")};
`;
const ArrowHead = styled.div<{ $isVerticalArrow: boolean }>`
    position: absolute;
    right: ${(props) => (props.$isVerticalArrow ? "-5px" : "-10px")}; /* position the arrowhead */
    top: ${(props) => (props.$isVerticalArrow ? "100% " : "50%")};
    width: 0;
    height: 0;
    border-top: ${(props) => (props.$isVerticalArrow ? "10px solid #ffd100" : "10px solid transparent")};
    border-right: ${(props) => (props.$isVerticalArrow ? "9px solid transparent" : "none")};
    border-bottom: ${(props) => (props.$isVerticalArrow ? "10px solid transparent" : "10px solid transparent")};
    border-left: ${(props) => (props.$isVerticalArrow ? "10px solid transparent" : "10px solid #ffd100")};
    transform: ${(props) => (props.$isVerticalArrow ? "inherit" : "translateY(-50%)")};
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
