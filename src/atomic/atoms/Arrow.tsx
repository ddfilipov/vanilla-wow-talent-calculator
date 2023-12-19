"use client";
import { FC } from "react";
import styled from "styled-components";

export interface ArrowProps {
    startingRow: number;
    endingRow: number;
    startingColumn: number;
    endingColumn: number;
    arrowIndex: number;
    hasArrowhead?: boolean;
    hasTurns?: boolean;
}

interface IArrow {
    $startingRow: number;
    $endingRow: number;
    $startingColumn: number;
    $endingColumn: number;
    $isVerticalArrow: boolean;
    $arrowIndex: number;
    $hasArrowhead: boolean;
    $hasTurns?: boolean;
}

const StyledArrow = styled.div<IArrow>`
    grid-row-start: ${(props) => props.$startingRow};
    grid-row-end: ${(props) => props.$endingRow + 1};
    grid-column-start: ${(props) => props.$startingColumn};
    grid-column-end: ${(props) => props.$endingColumn + 1};
    background-color: #ffd100;
    z-index: 2;
    position: relative;
    align-self: center;
    pointer-events: none;
    bottom: ${(props) =>
        props.$isVerticalArrow ? (props.$arrowIndex === 2 || props.$hasTurns ? "13px" : "5px") : "0"};
    right: ${(props) =>
        props.$isVerticalArrow
            ? "0"
            : (props.$arrowIndex === 1 && !props.$hasArrowhead) || props.$hasTurns
            ? "-8px"
            : "4px"};
    width: ${(props) =>
        props.$isVerticalArrow
            ? "12%"
            : (props.$arrowIndex === 1 && !props.$hasArrowhead) || props.$hasTurns
            ? "calc(100% - 78px)"
            : "calc(100% - 106px)"};
    height: ${(props) =>
        props.$isVerticalArrow
            ? props.$arrowIndex === 2 || props.$hasTurns
                ? "calc(100% - 84px)"
                : "calc(100% - 102px)"
            : "12%"};
`;
const ArrowHead = styled.div<{ $isVerticalArrow: boolean; $arrowIndex: number }>`
    position: absolute;
    right: ${(props) => (props.$isVerticalArrow ? "-5px" : "-10px")};
    top: ${(props) => (props.$isVerticalArrow ? "100% " : "50%")};
    width: 0;
    height: 0;
    pointer-events: none;
    border-top: ${(props) => (props.$isVerticalArrow ? "10px solid #ffd100" : "10px solid transparent")};
    border-right: ${(props) => (props.$isVerticalArrow ? "9px solid transparent" : "none")};
    border-bottom: ${(props) => (props.$isVerticalArrow ? "10px solid transparent" : "10px solid transparent")};
    border-left: ${(props) => (props.$isVerticalArrow ? "10px solid transparent" : "10px solid #ffd100")};
    transform: ${(props) => (props.$isVerticalArrow ? "inherit" : "translateY(-50%)")};
`;

export const Arrow: FC<ArrowProps> = ({
    startingRow,
    endingRow,
    startingColumn,
    endingColumn,
    arrowIndex,
    hasArrowhead = true,
    hasTurns = false,
}) => {
    const isVericalArrow = startingColumn - endingColumn === 0;
    return (
        <StyledArrow
            $startingRow={startingRow}
            $endingRow={endingRow}
            $startingColumn={startingColumn}
            $endingColumn={endingColumn}
            $isVerticalArrow={isVericalArrow}
            $arrowIndex={arrowIndex}
            $hasArrowhead={hasArrowhead}
            $hasTurns={hasTurns}
        >
            {hasArrowhead || !hasTurns ? (
                <ArrowHead $isVerticalArrow={isVericalArrow} $arrowIndex={arrowIndex} />
            ) : null}
        </StyledArrow>
    );
};
