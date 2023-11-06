"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import { ClassData } from "@/data/classData";

const Container = styled.div`
    display: flex;
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
    return <Container></Container>;
};
