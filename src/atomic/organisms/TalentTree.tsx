"use client";
import { FC } from "react";
import styled from "styled-components";
import { PlayableClassesType } from "@/utils/consts";

const Container = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
`;

interface TalentTreeProps {
    className?: PlayableClassesType;
}

export const TalentTree: FC<TalentTreeProps> = ({ className }) => {
    return <Container></Container>;
};
