"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";

const Container = styled.div`
    min-height: 500px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--main-area-border);
`;

interface TalentTreeProps {
    specName: string;
}

export const TalentTree: FC<TalentTreeProps> = ({ specName }) => {
    return <Container>{specName}</Container>;
};
