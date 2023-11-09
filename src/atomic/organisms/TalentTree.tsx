"use client";
import { FC } from "react";
import styled from "styled-components";
import { SpecTalent } from "@/data/classData";
import { TalentNode } from "../atoms/TalentNode";
import Image from "next/image";
import { Arrow } from "../atoms/Arrow";

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
                                <Arrow
                                    startingRow={node.talentRow}
                                    endingRow={node.unlocks[0]}
                                    startingColumn={node.talentcolumn}
                                    endingColumn={node.unlocks[1]}
                                />
                            ) : null}
                        </>
                    );
                })}
            </TalentGrid>
        </MainContainer>
    );
};
