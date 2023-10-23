import { FC } from "react";
import styled from "styled-components";
import { playableClasses } from "@/utils/consts";
import { ClassIcon } from "../atoms/ClassIcon";

const Container = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`;

export const ClassChooser: FC = () => {
    return (
        <>
            <Container>
                {playableClasses.map((playableClass) => (
                    <ClassIcon href={`/${playableClass.name}`} src={playableClass.src} key={playableClass.name} />
                ))}
            </Container>
        </>
    );
};
