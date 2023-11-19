"use client";
import { FC, Fragment, useState } from "react";
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
    /* TODO: maybe use a styled component instead of :last-child? */
    :last-child {
        margin-left: auto;
        background-color: transparent;
        color: var(--red-reset-color);
        font-weight: bold;
        border-radius: 0.3rem;
        padding: 0.2rem 0.4rem;
        border-width: 1px;
        border-color: #121822; //TODO: should use a var
        cursor: pointer;
        &:hover {
            box-shadow: inset 0 0 5px #596e92;
        }
    }
`;

const TalentGrid = styled.div<IStyledContainer>`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    place-items: center;
    background-image: url(${(props) => props.$backgroundImage});
    background-size: 100% 100%;
`;

interface TalentTreeProps {
    specName: string;
    specIcon: string;
    specBackground: string;
    specData: SpecTalent[];
    handleRemainingPoints: (action: RemainingPointsActionType, pointsDistributionIndex: number) => void;
    specIndex: number;
    resetSpecPoints: (pointsDistributionIndex: number) => void;
    pointsSpentOnTree: number;
}

export const TalentTree: FC<TalentTreeProps> = ({
    specName,
    specData,
    specIcon,
    specBackground,
    handleRemainingPoints,
    specIndex,
    resetSpecPoints,
    pointsSpentOnTree,
}) => {
    const [resetCounter, setResetCounter] = useState<number>(0);

    const handleReset = () => {
        setResetCounter((prevCounter) => prevCounter + 1);
        resetSpecPoints(specIndex);
    };
    return (
        <MainContainer>
            <Header>
                <Image
                    src={`/images/talent-icons/${specIcon}.jpg`}
                    width={26}
                    height={26}
                    alt="Picture of the author"
                />
                <h3>
                    {specName} ({pointsSpentOnTree})
                </h3>
                <button type="button" onClick={handleReset}>
                    X
                </button>
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
                                maxPoints={node.ranksNumber}
                                specIndex={specIndex}
                                resetSignal={resetCounter}
                                pointsSpentOnTree={pointsSpentOnTree}
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
