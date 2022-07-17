import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";

// TODO: change name!!!
const Letritas = styled.span`
    color: white;
    align-self: center;
    font-size: 2rem;
`;

export const MainPage: FC = () => {
    return (
        <>
            <Letritas>Choose a class:</Letritas>
            <ClassChooser />
        </>
    );
};
