import { FC } from "react";
import styled from "styled-components";
import { ISpecTalents, SpecIdType } from "../../interfaces";
import { TalentNode } from "../atoms/TalentNode";
import { TalentTreeGrid } from "./TalentTreeGrid";

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
    handleClickNode: (e: React.MouseEvent<HTMLButtonElement>, spec: SpecIdType) => void;
    specTalentPoints: number;
    remainingTalentPoints: number;
    classId: number;
    specRanks?: ISpecTalents[] | undefined;
}

export const TalentTree: FC<TalentTreeProps> = ({
    backgroundImage,
    specImage,
    specName,
    handleClickNode,
    specId,
    specTalentPoints,
    remainingTalentPoints,
    classId,
    specRanks,
}) => {
    const clickOnNode = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleClickNode(e, specId);
    };

    // const getSpecRanks = (classId: number, specId: number) => {    };
    console.log("showing ranks:", specRanks);
    return (
        <Container>
            <TopPart backgroundImage={specImage}>
                <div></div>
                <div>{`${specName} (${specTalentPoints})`}</div>
                <div>X</div>
            </TopPart>
            <TalentTreeStyled backgroundImage={backgroundImage}>
                <TalentTreeGrid>
                    {/* TODO: should do a map of ranks specRanks and maybe rename it to SpecTalents */}
                    {/* {specRanks.} specRanks is an object, not an array!!! transform the "talents" json node to an array then loop through it in here*/}
                    {specRanks?.map((node) => (
                        <TalentNode
                            handleClick={clickOnNode}
                            maxNodePoints={node.ranks.length}
                            remainingTalentPoints={remainingTalentPoints}
                        ></TalentNode>
                    ))}
                </TalentTreeGrid>
            </TalentTreeStyled>
        </Container>
    );
};
