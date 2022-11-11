import { createContext, FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BackgroundImage, ITalentNode, SpecIdType } from "../../interfaces";
import { TalentNode } from "../atoms/TalentNode";

const Container = styled.div`
    display: grid;
    grid-template-rows: 2rem auto;
    justify-self: stretch;
    color: white;
`;

const TalentNodesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    justify-self: stretch;
    color: white;
    border: 1px solid white;
    place-items: center;
    padding: 1rem;
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

// TODO: temporary button til I have a an actual button
const ResetTreeButtonStyled = styled.div`
    cursor: pointer;
    justify-self: center;
`;

export interface INodeData extends ITalentNode {
    pointsSpent: number;
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
    specRanks?: ITalentNode[] | undefined;
    resetTreeTalentPoints: (specId: SpecIdType, pointsSpentOnTree: number) => void;
}

export const TalentTree: FC<TalentTreeProps> = ({
    backgroundImage,
    specImage,
    specName,
    handleClickNode,
    specId,
    specTalentPoints,
    remainingTalentPoints,
    classId, //TODO: what was I supposed to do with this??
    specRanks,
    resetTreeTalentPoints,
}) => {
    const clickOnNode = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleClickNode(e, specId);
    };

    //TODO: make this work for TalentNodes!
    const onClickResetTree = () => {
        const auxArray = specRanks?.map((talent) => ({
            ...talent,
            pointsSpent: 0,
        }));
        setNodesPoints(auxArray);
        resetTreeTalentPoints(specId, specTalentPoints);
    };

    const [nodesPoints, setNodesPoints] = useState<INodeData[]>();
    useEffect(() => {
        const auxArray = specRanks?.map((talent) => ({
            ...talent,
            pointsSpent: 0,
        }));
        setNodesPoints(auxArray);
    }, []);

    const talentUp = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
        // TODO: should remove some ifs once this is working
        if (remainingTalentPoints > 0) {
            const auxArray = nodesPoints?.map((talent) => {
                if (
                    talent.talentNodeId === id &&
                    talent.pointsSpent < talent.numberOfRanks &&
                    talent.treePointsRequiredToLvl <= specTalentPoints
                ) {
                    clickOnNode(e);
                    return { ...talent, pointsSpent: talent.pointsSpent + 1 };
                }
                return talent;
            });
            setNodesPoints(auxArray);
        }
    };

    const talentDown = (id: number, e: React.MouseEvent<HTMLButtonElement>) => {
        // TODO: should remove some ifs once this is working
        e.preventDefault();
        if (remainingTalentPoints > 0) {
            const auxArray = nodesPoints?.map((talent) => {
                if (talent.talentNodeId === id && talent.pointsSpent > 0) {
                    clickOnNode(e);
                    return { ...talent, pointsSpent: talent.pointsSpent - 1 };
                }
                return talent;
            });
            setNodesPoints(auxArray);
        }
    };

    return (
        <Container>
            <TopPart backgroundImage={specImage}>
                <div></div>
                <div>{`${specName} (${specTalentPoints})`}</div>
                <ResetTreeButtonStyled
                    onClick={() => {
                        onClickResetTree();
                    }}
                >
                    X
                </ResetTreeButtonStyled>
            </TopPart>
            <TalentTreeStyled backgroundImage={backgroundImage}>
                <TalentNodesContainer>
                    {nodesPoints?.map((node) => (
                        <TalentNode
                            talentNode={node}
                            key={node.talentNodeId}
                            specTalentPoints={specTalentPoints}
                            talentUp={talentUp}
                            talentDown={talentDown}
                        />
                    ))}
                </TalentNodesContainer>
            </TalentTreeStyled>
        </Container>
    );
};
