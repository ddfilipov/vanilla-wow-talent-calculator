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

interface INodeData {
    idTalent: number;
    pointsSpent: number;
    maxNumberOfPoints: number;
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
    const [treePoints, setTreePoints] = useState<ITalentNode[]>();

    const clickOnNode = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleClickNode(e, specId);
    };

    //TODO: make this work for TalentNodes!
    const onClickResetTree = () => {
        resetTreeTalentPoints(specId, specTalentPoints);
    };

    const [nodesPoints, setNodesPoints] = useState<ITalentNode[]>();
    useEffect(() => {
        // TODO: should set nodePonts based on the specRanks,ranks the skill has. Even better, should pass the 3 of ranks a talent has
        // setNodesPoints()

        setNodesPoints(specRanks);
    }, []);

    useEffect(() => {
        // TODO: should create something like a Map type that links talentId with current points spent.
        // need something that has talentId, pointsSpent, maxPoints
        let newArray = specRanks?.map(({ talentNodeId, numberOfRanks }) => ({ talentNodeId, numberOfRanks }));
        console.log("before:", newArray);
        newArray?.map((element) => ({ ...element, newProp: 0 }));
        console.log("after:", newArray);
        //     specRanks?.map((talent,index)=>{
        //         console.log(talent);
        //         // newArray.
        // })
    }, []);

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
                            handleClick={clickOnNode}
                            maxNodePoints={node.numberOfRanks}
                            remainingTalentPoints={remainingTalentPoints}
                            talentIcon={node.talentIcon}
                            talentNode={node}
                            key={node.talentNodeId}
                            treePointsRequiredToLvl={node.treePointsRequiredToLvl}
                            specTalentPoints={specTalentPoints}
                        />
                    ))}
                </TalentNodesContainer>
            </TalentTreeStyled>
        </Container>
    );
};
