import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";

const Title = styled.span`
    color: white;
    align-self: center;
    font-size: 2rem;
`;

export const MainPage: FC = () => {
    return (
        <>
            <Title>Choose a class:</Title>
            <ClassChooser />
        </>
    );
};
