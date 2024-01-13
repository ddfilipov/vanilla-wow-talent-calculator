"use client";
import { FC, createContext, useState } from "react";
import styled from "styled-components";
import { ClassSelector } from "../molecules/ClassChooser";
import { MAX_TALENT_POINTS, PlayableClassesType } from "@/utils/consts";
import Link from "next/link";
import Image from "next/image";
import { TalentTrees } from "./TalentTrees";
import { ClassData } from "@/data/classData";
import { PointsSpentHeader } from "../molecules/PointsSpentHeader";
import { breakpoints } from "@/styles/breakpoints";

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 1rem;
    align-items: center;
    img {
        vertical-align: middle;
    }
`;

const Title = styled.h2`
    color: white;
    text-transform: capitalize;
    font-size: 1.5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 300px;
    max-width: none;
    ::-webkit-scrollbar {
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--main-area-border);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--icon-border-color);
    }
`;

interface TalentCalculatorProps {
    className: PlayableClassesType;
    classData: ClassData;
}

export type RemainingPointsActionType = "lvlUp" | "lvlDown" | "reset";

export const PointsLeftContext = createContext<number>(MAX_TALENT_POINTS);

export const TalentCalculator: FC<TalentCalculatorProps> = ({ className, classData }) => {
    const [remainingPoints, setRemainingPoints] = useState<number>(MAX_TALENT_POINTS);
    const [pointsDistribution, setPointsDistribution] = useState<number[]>([0, 0, 0]);

    const handleRemainingPoints = (action: RemainingPointsActionType, pointsDistributionIndex: number) => {
        const newPointsDistribution = [...pointsDistribution];
        if (action === "lvlUp" && remainingPoints > 0) {
            setRemainingPoints(remainingPoints - 1);
            newPointsDistribution[pointsDistributionIndex] += 1;
            setPointsDistribution(newPointsDistribution);
        } else if (action === "lvlDown" && remainingPoints < MAX_TALENT_POINTS) {
            newPointsDistribution[pointsDistributionIndex] -= 1;
            setRemainingPoints(remainingPoints + 1);
            setPointsDistribution(newPointsDistribution);
        }
    };

    const resetSpecPoints = (pointsDistributionIndex: number) => {
        const newPointsDistribution = [...pointsDistribution];
        const currentSpecPoints = newPointsDistribution[pointsDistributionIndex];
        setRemainingPoints(remainingPoints + currentSpecPoints);
        newPointsDistribution[pointsDistributionIndex] = 0;
        setPointsDistribution(newPointsDistribution);
    };

    return (
        <PointsLeftContext.Provider value={remainingPoints}>
            <Container>
                <StyledHeader>
                    <Link href="/">
                        <Image src="/images/wow-icon.png" width={38} height={38} alt="Picture of the author" />
                    </Link>
                    <Title>{`${className} Vanilla Talent Calculator`}</Title>
                </StyledHeader>
                <ClassSelector />
                <PointsSpentHeader
                    className={className}
                    classIcon={classData.classIcon.toLowerCase()}
                    classNameColor={classData.classNameColor}
                    remainingPoints={remainingPoints}
                    pointsDistribution={pointsDistribution}
                />
                <TalentTrees
                    classData={classData}
                    handleRemainingPoints={handleRemainingPoints}
                    resetSpecPoints={resetSpecPoints}
                    pointsDistribution={pointsDistribution}
                />
            </Container>
        </PointsLeftContext.Provider>
    );
};
