"use client";
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";
import { PlayableClassesType } from "@/utils/consts";

const Title = styled.span`
    color: white;
    align-self: center;
    font-size: 2rem;
`;

interface TreesComponentProps {
    className: PlayableClassesType;
}

export const TreesComponent: FC<TreesComponentProps> = ({ className }) => {
    return (
        <>
            <ClassChooser />
            <Title>{className}</Title>
        </>
    );
};
