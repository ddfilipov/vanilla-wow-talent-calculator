"use client";
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";
import { PlayableClassesType } from "@/utils/consts";

const Title = styled.span`
    color: white;
    font-size: 2rem;
`;

const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

interface TreesComponentProps {
    className: PlayableClassesType;
}

export const TreesComponent: FC<TreesComponentProps> = ({ className }) => {
    return (
        <Container>
            <Title>
                <span style={{ textTransform: "capitalize" }}>{className}</span>
                {` Vanilla talent calculator`}
            </Title>
            <ClassChooser />
        </Container>
    );
};
