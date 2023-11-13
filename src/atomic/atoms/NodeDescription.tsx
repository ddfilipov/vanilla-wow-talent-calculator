"use client";
import { FC } from "react";
import styled from "styled-components";

export interface NodeDescriptionProps {
    src: string;
    talentRow: number;
    talentColumn: number;
}
interface IStyledNode {
    $backgroundImage: string;
    $talentRow: number;
    $talentColumn: number;
}

const Container = styled.button`
    border: 1px solid var(--main-area-border);
    z-index: 2;
`;

export const NodeDescription: FC<NodeDescriptionProps> = ({ src, talentRow, talentColumn }) => {
    return <Container>aaaa</Container>;
};
