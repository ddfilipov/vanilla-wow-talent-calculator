// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC } from "react";
import styled from "styled-components";
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
`;

interface TalentAreaProps {
    className: string;
}

export const TalentArea: FC<TalentAreaProps> = ({ className }) => {
    return (
        <Container>
            <AreaSuperior>Area superior</AreaSuperior>
            <TalentTrees className={className} />
        </Container>
    );
};
