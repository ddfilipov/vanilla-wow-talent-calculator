import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-rows: 2rem auto;
    justify-self: stretch;
    color: white;
`;

// TODO: change this name, lame
const TopPart = styled.div<BackgroundImage>`
    border: 1px solid white;
    display: grid;
    grid-template-columns: 10% auto;
    div {
        :first-child {
            background-image: url(${(props) => props.backgroundImage});
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    align-content: center;
    padding: 1rem;
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
    specName: string;
}

export const TalentTree: FC<TalentTreeProps> = ({ className, backgroundImage, specImage, specName }) => {
    return (
        <Container>
            <TopPart backgroundImage={specImage}>
                {/* <img src={specImage} /> */}
                <div></div>
                <div>{specName}</div>
            </TopPart>
            <TalentTreeStyled backgroundImage={backgroundImage}></TalentTreeStyled>
        </Container>
    );
};
