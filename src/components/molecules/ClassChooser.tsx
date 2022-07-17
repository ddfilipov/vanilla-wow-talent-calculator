import { FC } from "react";
import styled from "styled-components";
import { ClassIcon } from "../atoms/ClassIcon";
import { classes } from "../consts";

const Container = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export const ClassChooser: FC = () => {
    return (
        <>
            <Container>
                {classes.ayuda.map((clase) => (
                    <ClassIcon href={`/${clase.class.name}`} src={clase.class.src} alt={clase.class.name} />
                ))}
            </Container>
        </>
    );
};
