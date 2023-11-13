"use client";
import { FC, Fragment } from "react";
import styled from "styled-components";
import { SpecTalent } from "@/data/classData";
import { TalentNode } from "../atoms/TalentNode";
import Image from "next/image";
import { Arrow } from "../atoms/Arrow";
import { RemainingPointsActionType } from "./TalentCalculator";

interface IStyledContainer {
    $backgroundImage: string;
}

const MainContainer = styled.div`
    min-height: 500px;
    min-width: 280px;
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
    handleRemainingPoints: (action: RemainingPointsActionType) => void;
}

export const TalentTree: FC<TalentTreeProps> = ({
    specName,
    specData,
    specIcon,
    specBackground,
    handleRemainingPoints,
}) => {
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
                        <Fragment key={node.talentId}>
                            <TalentNode
                                src={node.talentIcon.toLocaleLowerCase()}
                                talentRow={node.talentRow}
                                talentColumn={node.talentcolumn}
                                handleRemainingPoints={handleRemainingPoints}
                            />
                            {/* //TODO: shouldn't do this here, should do it in the Arrow compontent */}
                            {node.unlocks && node.unlocks?.length > 0
                                ? node.unlocks.map((arrow, index) => {
                                      return index <= 1 ? (
                                          <Arrow
                                              startingRow={node.talentRow}
                                              endingRow={arrow.row}
                                              startingColumn={node.talentcolumn}
                                              endingColumn={arrow.column}
                                              key={index}
                                          />
                                      ) : (
                                          <Arrow
                                              startingRow={node.unlocks?.[1].row as number}
                                              endingRow={arrow.row}
                                              startingColumn={node.unlocks?.[1].column as number}
                                              endingColumn={arrow.column}
                                              key={index}
                                          />
                                      );
                                  })
                                : null}
                        </Fragment>
                    );
                })}
            </TalentGrid>
        </MainContainer>
    );
};
