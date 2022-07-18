// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";

const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 15% auto;
    align-content: center;
    background-color: #001015;
    border: 1px solid black;
    border-radius: 1rem;
`;

interface TalentAreaProps {
    className: string;
    remainingTalentPoints: number;
    requiredLevel: number;
}

export const TopInfo: FC<TalentAreaProps> = ({ className, remainingTalentPoints, requiredLevel}) => {
    return (
        <Container>
            <span>{className} (0/0/0)</span>
            <span>Required level: {requiredLevel}</span>
            <span>Remaining Points: {remainingTalentPoints}</span>
        </Container>
    );
};
