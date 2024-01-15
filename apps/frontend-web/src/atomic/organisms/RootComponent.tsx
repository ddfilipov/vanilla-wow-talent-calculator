"use client";
import { FC } from "react";
import styled from "styled-components";
import { ClassSelector } from "../molecules/ClassChooser";

const Title = styled.span`
    color: white;
    align-self: center;
    font-size: 2rem;
`;

const Container = styled.div`
    max-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const RootComponent: FC = () => {
    return (
        <Container>
            <Title>Choose a class:</Title>
            <ClassSelector />
        </Container>
    );
};
