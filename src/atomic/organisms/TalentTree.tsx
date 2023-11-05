"use client";
import { FC } from "react";
import styled from "styled-components";
import { SpecTalent } from "@/data/classData";
import { TalentNode } from "../atoms/TalentNode";

const MainContainer = styled.div`
    min-height: 500px;
    min-width: 300px;
    display: grid;
    grid-template-rows: 20px 1fr;
    border: 1px solid var(--main-area-border);
`;

const Header = styled.div`
    display: flex;
    border: 1px solid var(--main-area-border);
`;

const TalentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    div {
        border: 1px solid var(--main-area-border);
    }
`;

interface TalentTreeProps {
    specName: string;
    specData: SpecTalent[];
}

export const TalentTree: FC<TalentTreeProps> = ({ specName, specData }) => {
    // console.log("hello this is specData in TalentTree:", specName, JSON.stringify(specData));
    return (
        <MainContainer>
            <Header>{specName}</Header>
            <TalentGrid>
                {specData.map((node) => {
                    return (
                        <TalentNode
                            src={node.talentIcon.toLocaleLowerCase()}
                            talentRow={node.talentRow}
                            talentColumn={node.talentcolumn}
                            key={node.talentId}
                        />
                    );
                })}
            </TalentGrid>
        </MainContainer>
    );
};
