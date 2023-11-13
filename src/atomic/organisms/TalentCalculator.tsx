"use client";
import { FC, useState } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";
import { MAX_TALENT_POINTS, PlayableClassesType } from "@/utils/consts";
import Link from "next/link";
import Image from "next/image";
import { TalentTrees } from "./TalentTrees";
import { ClassData } from "@/data/classData";
import { PointsSpentHeader } from "../molecules/PointsSpentHeader";

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
    height: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

interface TalentCalculatorProps {
    className: PlayableClassesType;
    classData: ClassData;
}

export const TalentCalculator: FC<TalentCalculatorProps> = ({ className, classData }) => {
    const [remainingPoinst, setRemainingPoinst] = useState<number>(MAX_TALENT_POINTS);
    return (
        <Container>
            <StyledHeader>
                <Link href="/">
                    <Image src="/images/wow-icon.png" width={38} height={38} alt="Picture of the author" />
                </Link>
                <Title>{`${className} Vanilla Talent Calculator`}</Title>
            </StyledHeader>
            <ClassChooser />
            <PointsSpentHeader
                className={className}
                classIcon={classData.classIcon.toLowerCase()}
                classNameColor={classData.classNameColor}
                remainingPoints={remainingPoinst}
            />
            <TalentTrees className={className} classData={classData} />
        </Container>
    );
};
