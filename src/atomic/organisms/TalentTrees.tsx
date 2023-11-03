"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";
import { TalentTree } from "./TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
`;

interface TalentTreesProps {
    className: PlayableClassesType;
}

export const TalentTrees: FC<TalentTreesProps> = ({ className }) => {
    return (
        <Container>
            <TalentTree />
            <TalentTree />
            <TalentTree />
        </Container>
    );
};
