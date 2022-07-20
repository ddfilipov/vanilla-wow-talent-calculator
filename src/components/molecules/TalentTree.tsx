import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-rows: 6% auto;
    justify-self: stretch;
    color: white;
`;

// TODO: change this name, lame
const TopPart = styled.div`
    border: 1px solid white;
    display: grid;
    grid-template-columns: 90% auto;
`;

const TalentTreeStyled = styled.div<BackgroundImage>`
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
    specImage: string;
}

export const TalentTree: FC<TalentTreeProps> = ({ className, backgroundImage, specImage }) => {
    return (
        <Container>
            <TopPart>
                <div>Spec</div>
                <div>X</div>
            </TopPart>
            <TalentTreeStyled backgroundImage={backgroundImage}></TalentTreeStyled>
        </Container>
    );
};
