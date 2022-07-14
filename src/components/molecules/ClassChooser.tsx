import { FC } from "react";
import styled from "styled-components";
import { ClassIcon } from "../atoms/ClassIcon";
import { classes2 } from "../consts";

const Container = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

// TODO: change name!!!
const Letritas = styled.span`
    color: white;
    align-self: center;
    font-size: 2rem;
`;

export const ClassChooser: FC = () => {
    return (
        <>
            <Letritas>Choose a class:</Letritas>
            <Container>
                {classes2.ayuda.map((clase) => (
                    <ClassIcon href={""} src={clase.class.src} alt={clase.class.name} />
                ))}
            </Container>
        </>
    );
};
