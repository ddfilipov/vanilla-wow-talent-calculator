// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC } from "react";
import styled from "styled-components";

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
    firstSpecPoints: number;
    secondSpecPoints: number;
    thirdSpecPoints: number;
}

export const TopInfo: FC<TalentAreaProps> = ({
    className,
    remainingTalentPoints,
    requiredLevel,
    firstSpecPoints,
    secondSpecPoints,
    thirdSpecPoints,
}) => {
    return (
        <Container>
            <span>
                {className} ({firstSpecPoints}/{secondSpecPoints}/{thirdSpecPoints})
            </span>
            <span>Required level: {requiredLevel < 10 ? "-" : requiredLevel}</span>
            <span>Remaining Points: {remainingTalentPoints}</span>
        </Container>
    );
};

//TODO: subir en cualquier rama de talentos solo sube la primera rama!!!!! FIX!!
