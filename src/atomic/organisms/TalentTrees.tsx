"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import { TalentTree } from "./TalentTree";
import { ClassData } from "@/data/classData";
import { RemainingPointsActionType } from "./TalentCalculator";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 30px;
`;

interface TalentTreesProps {
    className: PlayableClassesType;
    classData: ClassData;
    handleRemainingPoints: (action: RemainingPointsActionType, pointsDistributionIndex: number) => void;
    resetSpecPoints: (pointsDistributionIndex: number) => void;
    pointsDistribution: number[];
}

export const TalentTrees: FC<TalentTreesProps> = ({
    className,
    classData,
    handleRemainingPoints,
    resetSpecPoints,
    pointsDistribution,
}) => {
    return (
        <Container>
            {classData?.specs.map((spec, specIndex) => {
                return (
                    <TalentTree
                        specName={spec.specName}
                        key={spec.specName.toLocaleLowerCase()}
                        specData={spec.specTalents}
                        specIcon={spec.specIcon?.toLocaleLowerCase()}
                        specBackground={spec.specBackground}
                        handleRemainingPoints={handleRemainingPoints}
                        specIndex={specIndex}
                        resetSpecPoints={resetSpecPoints}
                        pointsSpentOnTree={pointsDistribution[specIndex]}
                    />
                );
            })}
        </Container>
    );
};
