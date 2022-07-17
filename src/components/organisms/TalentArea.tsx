// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC, useState } from "react";
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
    const [currentTalentPoints, setCurrentTalentPoints] = useState<number>(51);

    return (
        <Container>
            <TopTalentArea className={className} currentTalentPoints={currentTalentPoints}></TopTalentArea>
            <TalentTrees className={className} talentBackgroundImages={talentBackgroundImages} />
        </Container>
    );
};
