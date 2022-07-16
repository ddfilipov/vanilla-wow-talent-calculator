import { FC } from "react";
import styled from "styled-components";
import asd from "../../images/warrior_tree_arms.jpeg";

const Container = styled.div<BackgroundImage>`
    border: 1px solid white;
    height: auto;
    width: auto;
    color: white;
    justify-self: stretch;
    background-image: url(${(props) => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

interface BackgroundImage {
    backgroundImage: string;
}

interface TalentTreeProps {
    className: string;
    backgroundImage: string;
}

export const TalentTree: FC<TalentTreeProps> = ({ className, backgroundImage }) => {
    console.log(backgroundImage);
    return (
        <Container backgroundImage={backgroundImage}>
        </Container>
    );
};
