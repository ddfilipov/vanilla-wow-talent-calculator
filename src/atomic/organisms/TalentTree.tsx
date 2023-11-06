"use client";
import { FC } from "react";
import styled from "styled-components";
import { SpecTalent } from "@/data/classData";
import { TalentNode } from "../atoms/TalentNode";
import Image from "next/image";

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

const TalentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    place-items: center;
    div {
        border: 1px solid var(--main-area-border);
    }
`;

interface TalentTreeProps {
    specName: string;
    specIcon: string;
    specData: SpecTalent[];
}

export const TalentTree: FC<TalentTreeProps> = ({ specName, specData, specIcon }) => {
    if (specName === "Beast Mastery") {
        console.log("asd");
    }
    return (
        <MainContainer>
            <Header>
                <Image
                    src={`/images/talent-icons/${specIcon}.jpg`}
                    width={26}
                    height={22}
                    alt="Picture of the author"
                />
                <h3>{specName}</h3>
            </Header>
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
