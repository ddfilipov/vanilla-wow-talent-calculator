import { FC } from "react";
import styled from "styled-components";
import { TalentNode } from "../atoms/TalentNode";

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
    grid-template-columns: 10% 1fr 20px;
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
    padding: 10px;
`;

// TODO: should be a general interface, move
export interface BackgroundImage {
    backgroundImage: string;
}

interface TalentTreeProps {
    className: string;
    backgroundImage: string;
    specImage: string;
    specName: string;
    subirPuntos: () => void;
    bajarPuntos: () => void;
}

export const TalentTree: FC<TalentTreeProps> = ({ className, backgroundImage, specImage, specName, subirPuntos, bajarPuntos }) => {
    return (
        <Container>
            <TopPart backgroundImage={specImage}>
                {/* <img src={specImage} /> */}
                <div></div>
                <div>{`${specName} ()`}</div>
                <div>X</div>
            </TopPart>
            <TalentTreeStyled backgroundImage={backgroundImage}>
                <TalentNode subirPuntos={subirPuntos} bajarPuntos={bajarPuntos}></TalentNode>
            </TalentTreeStyled>
        </Container>
    );
};
