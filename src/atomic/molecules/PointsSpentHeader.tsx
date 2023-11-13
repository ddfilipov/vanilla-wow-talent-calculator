"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import Image from "next/image";

interface IStyledContainer {
    $classNameColor: string;
}

const Container = styled.div<IStyledContainer>`
    display: flex;
    gap: 10px;
    padding: 5px;
    text-transform: capitalize;
    border: 1px solid var(--main-area-border);
    img {
        border-radius: 1rem;
    }
    h2 {
        color: ${(props) => props.$classNameColor};
    }
`;

interface PointsSpentHeaderProps {
    className: PlayableClassesType;
    classIcon: string;
    pointsDistribution?: any; // TODO: type
    pointsLeft?: number;
    classNameColor: string;
}

export const PointsSpentHeader: FC<PointsSpentHeaderProps> = ({
    className,
    classIcon,
    pointsDistribution,
    pointsLeft,
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
                alt="Picture of the author"
            />
            <h2>{className}</h2>
        </Container>
    );
};
