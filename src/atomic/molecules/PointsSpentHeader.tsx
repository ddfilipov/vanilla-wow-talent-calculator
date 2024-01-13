"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import Image from "next/image";
import { breakpoints } from "@/styles/breakpoints";

interface IStyledContainer {
    $classNameColor: string;
}

const Container = styled.div<IStyledContainer>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 5px;
    text-transform: capitalize;
    border: 1px solid var(--main-area-border);
    font-size: 1rem;
    @media ((${breakpoints.tablet})) {
        flex-wrap: nowrap;
    }
    img {
        border-radius: 1rem;
    }
    h2 {
        color: ${(props) => props.$classNameColor};
    }
    :last-child {
        margin-left: auto;
    }
    span {
        @media ((${breakpoints.tablet})) {
            flex-basis: auto;
        }
        flex-basis: 100%;
    }
`;

interface PointsSpentHeaderProps {
    className: PlayableClassesType;
    classIcon: string;
    pointsDistribution?: number[];
    remainingPoints?: number;
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
        <Container $classNameColor={classNameColor}>
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
            <h2>{className}</h2>
            <div style={{ margin: 0 }}>{pointsDistribution?.join(" / ")}</div>
            <span>Remaining points: {remainingPoints}</span>
        </Container>
    );
};
