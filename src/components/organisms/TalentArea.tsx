// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ITalentTreeBackground } from "../../interfaces";
import { TalentTrees } from "./TalentTrees";
import { TopTalentArea } from "./TopTalentArea";

const Container = styled.div`
    display: grid;
    grid-template-rows: 15% auto;
    height: inherit;
    gap: 1rem;
    padding: 2rem;
`;

interface TalentAreaProps {
    className: string;
    talentBackgroundImages: ITalentTreeBackground;
}

export const TalentArea: FC<TalentAreaProps> = ({ className, talentBackgroundImages }) => {
    const [remainingTalentPoints, setRemainingTalentPoints] = useState<number>(51);
    const [requiredLevel, setRequiredLevel] = useState<number>(9);

    useEffect(() => {
        const previousRemainingPoints = remainingTalentPoints;
        setRequiredLevel(requiredLevel + 1);
    }, [remainingTalentPoints]);

    return (
        <Container>
            <TopTalentArea className={className} remainingTalentPoints={remainingTalentPoints}></TopTalentArea>
            <TalentTrees className={className} talentBackgroundImages={talentBackgroundImages} />
        </Container>
    );
};
