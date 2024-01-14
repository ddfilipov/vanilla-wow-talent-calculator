"use client";
import { FC } from "react";
import styled from "styled-components";
import { MAX_TALENT_POINTS, MIN_LEVEL, PlayableClassesType } from "@/utils/consts";
import Image from "next/image";
import { breakpoints } from "@/styles/breakpoints";

interface IStyledInfo {
    $classNameColor: string;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
    gap: 5px;
    padding: 5px;
    text-transform: capitalize;
    border: 1px solid var(--main-area-border);
    font-size: 1rem;
    @media ((${breakpoints.tablet})) {
        max-width: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        gap: 10px;
    }
    img {
        border-radius: 1rem;
    }
    :last-child {
        margin-left: auto;
    }
    span {
        @media ((${breakpoints.tablet})) {
            flex-basis: auto;
        }
    }
`;

const StyledInfo = styled.div<IStyledInfo>`
    @media ((${breakpoints.tablet})) {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    h2 {
        color: ${(props) => props.$classNameColor};
        font-size: 1.2rem;
    }
`;

interface PointsSpentHeaderProps {
    className: PlayableClassesType;
    classIcon: string;
    pointsDistribution?: number[];
    remainingPoints: number;
    classNameColor: string;
}

export const PointsSpentHeader: FC<PointsSpentHeaderProps> = ({
    className,
    classIcon,
    pointsDistribution,
    remainingPoints,
    classNameColor,
}) => {
    return (
        <Container>
            <Image
                src={`/images/class-icons/${classIcon}.jpg`}
                width={26}
                height={26}
                style={{
                    width: 28,
                    height: 28,
                }}
                alt={className}
            />
            <StyledInfo $classNameColor={classNameColor}>
                <h2>{className}</h2>
                <div>{pointsDistribution?.join(" / ")}</div>
            </StyledInfo>
            <StyledInfo $classNameColor={classNameColor} style={{ textAlign: "right" }}>
                <p>Remaining points: {remainingPoints}</p>
                <p>Current level: {MAX_TALENT_POINTS - remainingPoints + MIN_LEVEL - 1}</p>
            </StyledInfo>
        </Container>
    );
};
