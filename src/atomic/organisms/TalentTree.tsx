"use client";
import { FC } from "react";
import styled from "styled-components";
import { SpecTalent } from "@/data/classData";
import { TalentNode } from "../atoms/TalentNode";
import Image from "next/image";

interface IStyledContainer {
    $backgroundImage: string;
}

const MainContainer = styled.div`
    min-height: 500px;
    min-width: 300px;
    display: grid;
    grid-template-rows: 2.5rem 1fr;
    border: 1px solid var(--main-area-border);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 5px;
    gap: 10px;
    border: 1px solid var(--main-area-border);
    img {
        border-radius: 1rem;
    }
`;

const TalentGrid = styled.div<IStyledContainer>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    place-items: center;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: 100% 100%;
    div {
        border: 1px solid var(--main-area-border);
    }
`;

interface TalentTreeProps {
    specName: string;
    specIcon: string;
    specBackground: string;
    specData: SpecTalent[];
}

const StyledVerticalTestArrow = styled.div`
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 3;
    grid-column-end: 3;
    background-color: yellow;
    width: 10px;
    height: 100%;
`;

const StyledHorizontalTestArrow = styled.div`
    grid-row-start: 5;
    grid-row-end: 5;
    grid-column-start: 4;
    grid-column-end: 5;
    background-color: yellow;
    width: 100%;
    height: 10px;
`;

interface IArrow {
    $startingRow: number;
    $endingRow: number;
    $startingColumn: number;
    $endingColumn: number;
}
const StyledTestArrow = styled.div<IArrow>`
    grid-row-start: ${(props) => props.$startingRow};
    grid-row-end: ${(props) => props.$endingRow + 1};
    grid-column-start: ${(props) => props.$startingColumn};
    grid-column-end: ${(props) => props.$endingColumn + 1};
    background-color: yellow;
    width: 100%;
    height: 50%;
`;

export const TalentTree: FC<TalentTreeProps> = ({ specName, specData, specIcon, specBackground }) => {
    if (specName === "Beast Mastery") {
        console.log("specBackground:", specBackground);
    }
    return (
        <MainContainer>
            <Header>
                <Image
                    src={`/images/talent-icons/${specIcon}.jpg`}
                    width={26}
                    height={26}
                    alt="Picture of the author"
                />
                <h3>{specName}</h3>
            </Header>
            <TalentGrid $backgroundImage={`/images/spec-backgrounds/${specBackground}.jpg`}>
                {specData.map((node) => {
                    return (
                        <>
                            <TalentNode
                                src={node.talentIcon.toLocaleLowerCase()}
                                talentRow={node.talentRow}
                                talentColumn={node.talentcolumn}
                                key={node.talentId}
                            />
                            {node.unlocks && node.unlocks?.length > 0 ? (
                                <StyledTestArrow
                                    $startingRow={node.talentRow}
                                    $endingRow={node.unlocks[0]}
                                    $startingColumn={node.talentcolumn}
                                    $endingColumn={node.unlocks[1]}
                                />
                            ) : null}
                        </>
                    );
                })}

                {/* <StyledHorizontalTestArrow> </StyledHorizontalTestArrow> */}
            </TalentGrid>
        </MainContainer>
    );
};
