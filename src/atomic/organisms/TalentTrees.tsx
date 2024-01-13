"use client";
import { FC } from "react";
import styled from "styled-components";
import { TalentTree } from "./TalentTree";
import { ClassData } from "@/data/classData";
import { RemainingPointsActionType } from "./TalentCalculator";
import { breakpoints } from "@/styles/breakpoints";

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: none;
    @media ((${breakpoints.tablet})) {
        gap: 30px;
    }
    overflow-y: auto;
`;

interface TalentTreesProps {
    classData: ClassData;
    handleRemainingPoints: (action: RemainingPointsActionType, pointsDistributionIndex: number) => void;
    resetSpecPoints: (pointsDistributionIndex: number) => void;
    pointsDistribution: number[];
}

export const TalentTrees: FC<TalentTreesProps> = ({
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
