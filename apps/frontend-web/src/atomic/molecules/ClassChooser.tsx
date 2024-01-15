import { FC } from "react";
import styled from "styled-components";
import { playableClasses } from "@/utils/consts";
import { ClassIcon } from "../atoms/ClassIcon";

const Container = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1.5rem;
    justify-content: center;
`;

export const ClassSelector: FC = () => {
    return (
        <>
            <Container>
                {playableClasses.map((playableClass) => (
                    <ClassIcon
                        href={`/${playableClass.name}`}
                        src={playableClass.src}
                        key={playableClass.name}
                        aria-label={`Make your ${playableClass.name} build`}
                    />
                ))}
            </Container>
        </>
    );
};
