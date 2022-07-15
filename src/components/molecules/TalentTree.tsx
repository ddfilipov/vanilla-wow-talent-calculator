import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid white;
    height: auto;
    width: auto;
    color: white;
`;

interface TalentTreeProps {
    className: string;
}

export const TalentTree: FC<TalentTreeProps> = ({ className }) => {
    return <Container>{className} talents</Container>;
};
