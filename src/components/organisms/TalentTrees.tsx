import { FC } from "react";
import styled from "styled-components";
import { TalentTree } from "../molecules/TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    gap: 1.5rem;
    justify-items: center;
    height: 100%;
`;

interface TalentTreesProps {
    className: string;
}

export const TalentTrees: FC<TalentTreesProps> = ({ className }) => {
    return (
        <Container>
            <TalentTree className={className}/>
            <TalentTree className={className}/>
            <TalentTree className={className}/>
        </Container>
    );
};
