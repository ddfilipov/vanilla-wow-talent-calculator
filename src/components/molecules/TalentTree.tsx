import { FC, useRef, useState } from "react";
import styled from "styled-components";
import { BackgroundImage, ITalentNode, SpecIdType } from "../../interfaces";
import { ITalentNodeFunctions, TalentNode } from "../atoms/TalentNode";

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

//TODO: first number should be the id, second one should be the points spent on that talent
interface ITalentNodesState {
    node: Map<number, number>;
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
    const [pointsSpentOnTree, setPointsSpentOnTree] = useState();

    const [nodesPoints, setNodesPoints] = useState<ITalentNodesState>();

    const clickOnNode = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleClickNode(e, specId);
    };
    const childRef = useRef<ITalentNodeFunctions>(null);

    //TODO: make this work!
    const onClickResetTree = () => {
        resetTreeTalentPoints(specId, specTalentPoints);
        childRef.current?.childFunction1();
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
                    {specRanks?.map((node) => (
                        <TalentNode
                            handleClick={clickOnNode}
                            maxNodePoints={node.numberOfRanks}
                            remainingTalentPoints={remainingTalentPoints}
                            talentIcon={node.talentIcon}
                            talentNode={node}
                            key={node.talentNodeId}
                            treePointsRequiredToLvl={node.treePointsRequiredToLvl}
                            specTalentPoints={specTalentPoints}
                            ref={childRef}
                        />
                    ))}
                </TalentNodesContainer>
            </TalentTreeStyled>
        </Container>
    );
};
