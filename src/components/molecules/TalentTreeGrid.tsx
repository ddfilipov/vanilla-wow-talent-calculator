import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    justify-self: stretch;
    color: white;
    border: 1px solid white;
    place-items: center;
    padding: 1rem;
    div {
        /* border: 1px solid white; */
    }
`;

interface TalentTreeGridProps {
    children: React.ReactNode;
}

export const TalentTreeGrid: FC<TalentTreeGridProps> = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
};
