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
    parentNodeCapped: boolean;
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
    $arrowColor: string;
}

const StyledArrow = styled.div<IArrow>`
    grid-row-start: ${(props) => props.$startingRow};
    grid-row-end: ${(props) => props.$endingRow + 1};
    grid-column-start: ${(props) => props.$startingColumn};
    grid-column-end: ${(props) => props.$endingColumn + 1};
    background-color: ${(props) => props.$arrowColor};
    position: relative;
    align-self: center;
    pointer-events: none;
    bottom: ${(props) =>
        props.$isVerticalArrow ? (props.$arrowIndex === 2 || props.$hasTurns ? "13px" : "5px") : "0"};
    right: ${(props) =>
        props.$isVerticalArrow
            ? "0"
            : (props.$arrowIndex === 1 && !props.$hasArrowhead) || props.$hasTurns
            ? "-6px"
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
            : "14%"};
`;

interface IArrowHead {
    $isVerticalArrow: boolean;
    $arrowIndex: number;
    $arrowColor: string;
}

const ArrowHead = styled.div<IArrowHead>`
    position: absolute;
    right: ${(props) => (props.$isVerticalArrow ? "-5px" : "-10px")};
    top: ${(props) => (props.$isVerticalArrow ? "100% " : "50%")};
    width: 0;
    height: 0;
    pointer-events: none;
    z-index: 1;
    border-top: ${(props) => (props.$isVerticalArrow ? `10px solid ${props.$arrowColor}` : "10px solid transparent")};
    border-right: ${(props) => (props.$isVerticalArrow ? "9px solid transparent" : "none")};
    border-bottom: ${(props) => (props.$isVerticalArrow ? "10px solid transparent" : "10px solid transparent")};
    border-left: ${(props) => (props.$isVerticalArrow ? "10px solid transparent" : `10px solid ${props.$arrowColor}`)};
    transform: ${(props) => (props.$isVerticalArrow ? "inherit" : "translateY(-50%)")};
`;

function getArrowColor(isParentNodeCapped: boolean) {
    return isParentNodeCapped ? "#ffd100" : "#9d9d9d";
}

export const Arrow: FC<ArrowProps> = ({
    startingRow,
    endingRow,
    startingColumn,
    endingColumn,
    arrowIndex,
    hasArrowhead = true,
    hasTurns = false,
    parentNodeCapped,
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
            $arrowColor={getArrowColor(parentNodeCapped)}
        >
            {hasArrowhead || !hasTurns ? (
                <ArrowHead
                    $isVerticalArrow={isVericalArrow}
                    $arrowIndex={arrowIndex}
                    $arrowColor={getArrowColor(parentNodeCapped)}
                />
            ) : null}
        </StyledArrow>
    );
};
