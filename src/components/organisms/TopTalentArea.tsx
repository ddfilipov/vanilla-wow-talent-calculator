// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid white;
    color: white;
    text-align: center;
    font-size: 32px;
`;

interface TalentAreaProps {
    className: string;
}

export const TopTalentArea: FC<TalentAreaProps> = ({ className }) => {
    return <Container>{className}</Container>;
};
