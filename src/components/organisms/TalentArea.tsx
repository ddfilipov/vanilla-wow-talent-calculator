// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC } from "react";
import styled from "styled-components";
import { ITalentTreeBackground } from "../../interfaces";
import { TalentTrees } from "./TalentTrees";

const Container = styled.div`
    display: grid;
    grid-template-rows: 10% auto;
    height: inherit;
    gap: 1rem;
    padding: 2rem;
`;

const AreaSuperior = styled.div`
    border: 1px solid white;
    color: white;
    text-align: center;
    font-size: 32px;
`;

interface TalentAreaProps {
    className: string;
    talentBackgroundImages: ITalentTreeBackground;
}

export const TalentArea: FC<TalentAreaProps> = ({ className, talentBackgroundImages }) => {
    return (
        <Container>
            <AreaSuperior>{className}</AreaSuperior>
            <TalentTrees className={className} talentBackgroundImages={talentBackgroundImages} />
        </Container>
    );
};
