"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import { TalentTree } from "./TalentTree";
import { ClassData } from "@/data/classData";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
`;

interface TalentTreesProps {
    className: PlayableClassesType;
    classData: ClassData;
}

export const TalentTrees: FC<TalentTreesProps> = ({ className, classData }) => {
    return (
        <Container>
            {classData?.specs.map((spec) => {
                return <TalentTree specName={spec.specName} key={spec.specName.toLocaleLowerCase()} specData={spec.specTalents}/>;
            })}
        </Container>
    );
};
