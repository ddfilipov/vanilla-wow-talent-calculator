// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";
import { TopInfo } from "../molecules/TopInfo";

const Container = styled.div`
    border: 1px solid white;
    color: white;
    display: grid;
    grid-template-rows: 50% auto;
    align-content: center;
    padding: 1rem;
    gap: 1rem;
`;

interface TalentAreaProps {
    className: string;
    remainingTalentPoints: number;
    requiredLevel: number;
    firstSpecPoints: number;
    secondSpecPoints: number;
    thirdSpecPoints: number;
}

export const TopTalentArea: FC<TalentAreaProps> = ({
    className,
    remainingTalentPoints,
    requiredLevel,
    firstSpecPoints,
    secondSpecPoints,
    thirdSpecPoints,
}) => {
    return (
        <Container>
            <ClassChooser />
            
            <TopInfo
                className={className}
                remainingTalentPoints={remainingTalentPoints}
                requiredLevel={requiredLevel}
                firstSpecPoints={firstSpecPoints}
                secondSpecPoints={secondSpecPoints}
                thirdSpecPoints={thirdSpecPoints}
            />
        </Container>
    );
};
