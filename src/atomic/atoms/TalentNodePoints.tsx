"use client";
import { FC } from "react";
import styled from "styled-components";

export interface TalentNodeProps {
    currentPoints: number;
    maxPoints: number;
}

interface IContainer {}

const Container = styled.div<IContainer>`
    display: flex;
    position: relative;
    height: 14px;
    width: 22px;
    bottom: 6px;
    left: 25px;
    background-color: black;
    padding: 1px;
    justify-content: right;
    border-radius: 0.3rem;
    z-index: 1;
    span {
        color: var(--uncapped-node-color);
        position: relative;
        font-size: 0.7rem;
        right: 1px;
    }
`;

export const TalentNodePoints: FC<TalentNodeProps> = ({ currentPoints, maxPoints }) => {
    return (
        <Container>
            <span>
                {currentPoints}/{maxPoints}
            </span>
        </Container>
    );
};