import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ITalentNode } from "../../interfaces";
import { INodeData } from "../molecules/TalentTree";
import { NodeTooltip } from "./NodeTooltip";

interface INodeStyle {
    row: number;
    column: number;
    treePointsRequiredToLvl: number;
    pointsSpentOnTree: number;
}

interface INodePoints {
    isNodeCapped: boolean;
}
interface IBackgroundImage extends INodePoints {
    backgroundImage: string;
}

const ButtonWrapper = styled.div``;

const ButtonContainer = styled.div<INodeStyle>`
    height: 45px;
    width: 45px;
    position: relative;
    grid-row-start: ${(props) => props.row};
    grid-row-end: ${(props) => props.row + 1};
    grid-column-start: ${(props) => props.column};
    grid-column-end: ${(props) => props.column + 1};
    button {
        filter: ${(props) => (props.pointsSpentOnTree < props.treePointsRequiredToLvl ? "grayscale(100%)" : "default")};
    }
    span {
        filter: ${(props) => (props.pointsSpentOnTree < props.treePointsRequiredToLvl ? "grayscale(100%)" : "default")};
    }
`;

const ButtonStyled = styled.button<IBackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
    border: 2px solid ${(props) => (props.isNodeCapped ? "var(--capped-node-color)" : "var(--uncapped-node-color)")};
    order: 2;
`;

const NodePoints = styled.span<INodePoints>`
    bottom: 2px;
    right: 2px;
    font-size: 13px;
    justify-self: right;
    position: absolute;
    user-select: none;
    cursor: pointer;
    color: ${(props) => (props.isNodeCapped ? "var(--capped-node-color)" : "var(--uncapped-node-color)")};
    z-index: 100;
    background-color: black;
    padding: 0 1px;
    order: 3;
`;

export interface ITalentNodeFunctions {
    childFunction1: () => void;
}

export interface TalentNodeProps {
    talentNode: INodeData;
    specTalentPoints: number;
    talentUp: (id: number, e: React.MouseEvent<HTMLButtonElement>) => void;
    talentDown: (id: number, e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TalentNode: FC<TalentNodeProps> = ({
    talentNode,
    specTalentPoints,
    talentUp,
    talentDown,
}) => {
    const [isNodeCapped, setIsNodeCapped] = useState<boolean>(false);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    useEffect(() => {
        talentNode.numberOfRanks === talentNode.pointsSpent ? setIsNodeCapped(true) : setIsNodeCapped(false);
    }, [talentNode.pointsSpent, talentNode.numberOfRanks]);

    useEffect(() => {
        console.log("hello talentNode.pointsSpent", talentNode.pointsSpent);
    }, [talentNode.pointsSpent]);

    return (
        <ButtonContainer
            row={talentNode.row}
            column={talentNode.column}
            treePointsRequiredToLvl={talentNode.treePointsRequiredToLvl}
            pointsSpentOnTree={specTalentPoints}
        >
            <div>
                <ButtonStyled
                    // TODO: understand how did I pass this route!! ../../ from public/images works but src/images doesnt????
                    backgroundImage={talentNode.talentIcon}
                    isNodeCapped={isNodeCapped}
                    // onClick={(e: React.MouseEvent<HTMLButtonElement>) => pointsUp(e)}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => talentUp(talentNode.talentNodeId, e)}
                    onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) => talentDown(talentNode.talentNodeId, e)}
                    // onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) => pointsDown(e)}talentDown
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                />
                <NodePoints
                    isNodeCapped={isNodeCapped}
                >{`${talentNode.pointsSpent}/${talentNode.numberOfRanks}`}</NodePoints>
            </div>
            {showTooltip && <NodeTooltip nodeFields={talentNode} currentNodeRank={talentNode.pointsSpent} />}
        </ButtonContainer>
    );
};
