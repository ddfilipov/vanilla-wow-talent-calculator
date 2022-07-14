import { FC } from "react";
import styled from "styled-components";
import { classes2 } from "../consts";

const Container = styled.div`
    border: 1px solid white;
    margin-top: 10px;
`;

export const ClassChooser: FC = () => {
    return (
        <Container>
            <div>
                {classes2.ayuda.map((clase) => (
                    <img src={clase.class.src} key={clase.class.name} alt={clase.class.name}></img>
                ))}
            </div>
        </Container>
    );
};
