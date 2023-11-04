"use client";
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";

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

interface RootComponentProps {
    fetchedClassData: any;
}

export const RootComponent: FC<RootComponentProps> = ({ fetchedClassData }) => {
    console.log("printing stuff on the client:", fetchedClassData);
    return (
        <Container>
            <Title>Choose a class:</Title>
            <ClassChooser />
        </Container>
    );
};
