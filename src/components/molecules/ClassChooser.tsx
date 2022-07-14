import { FC } from "react";
import styled from "styled-components";
import { classes2 } from "../consts";

const Container = styled.div`
    border: 1px solid white;
    margin-top: 10px;
    align-self: center;
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
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
                <div>
                    {classes2.ayuda.map((clase) => (
                        <img src={clase.class.src} key={clase.class.name} alt={clase.class.name}></img>
                    ))}
                </div>
            </Container>
        </>
    );
};
