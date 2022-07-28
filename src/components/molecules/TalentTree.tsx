import { FC } from "react";
import styled from "styled-components";
import { SpecIdType } from "../../interfaces";
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
    specId: SpecIdType;
    backgroundImage: string;
    specImage: string;
    specName: string;
    handleClickNode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TalentTree: FC<TalentTreeProps> = ({ backgroundImage, specImage, specName, handleClickNode }) => {
    return (
        <Container>
            <TopPart backgroundImage={specImage}>
                <div></div>
                <div>{`${specName} ()`}</div>
                <div>X</div>
            </TopPart>
            <TalentTreeStyled backgroundImage={backgroundImage}>
                <TalentNode handleClickNode={handleClickNode}></TalentNode>
            </TalentTreeStyled>
        </Container>
    );
};
