"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import { ClassData } from "@/data/classData";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    gap: 10px;
    padding: 5px;
    text-transform: capitalize;
    border: 1px solid var(--main-area-border);
    img {
        border-radius: 1rem;
    }
`;

interface PointsSpentHeaderProps {
    className: PlayableClassesType;
    classIcon: string;
    pointsDistribution?: any; // TODO: type
    pointsLeft?: number;
}

export const PointsSpentHeader: FC<PointsSpentHeaderProps> = ({
    className,
    classIcon,
    pointsDistribution,
    pointsLeft,
}) => {
    return (
        <Container>
            <Image src={`/images/class-icons/${classIcon}.jpg`} width={26} height={22} alt="Picture of the author" />
            <h2>{className}</h2>
        </Container>
    );
};
