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
    $isVericalArrow: boolean;
}

const StyledTestArrow = styled.div<IArrow>`
    grid-row-start: ${(props) => props.$startingRow};
    grid-row-end: ${(props) => props.$endingRow + 1};
    grid-column-start: ${(props) => props.$startingColumn};
    grid-column-end: ${(props) => props.$endingColumn + 1};
    background-color: #ffd100;
    width: ${(props) => (props.$isVericalArrow ? "15%" : "calc(100% - 38px)")};
    height: ${(props) => (props.$isVericalArrow ? "calc(100% - 38px)" : "15%")};
`;

export const Arrow: FC<ArrowProps> = ({ startingRow, endingRow, startingColumn, endingColumn }) => {
    const isVericalArrow = startingColumn - endingColumn === 0;
    console.log("isVericalArrow:", isVericalArrow);
    return (
        <StyledTestArrow
            $startingRow={startingRow}
            $endingRow={endingRow}
            $startingColumn={startingColumn}
            $endingColumn={endingColumn}
            $isVericalArrow={isVericalArrow}
        />
    );
};
