import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { INodeData } from "../molecules/TalentTree";
import { NodeTooltip } from "./NodeTooltip";
// import downArrow from "../../svg/arrow-down.svg";
import downArrow from "../../images/down.png";

interface INodeStyle {
    row: number;
    column: number;
    treePointsRequiredToLvl: number;
    pointsSpentOnTree: number;
}

interface IArrowStyle {
    row: number;
    column: number;
    unlocksRow: number;
    unlocksColumn: number;
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
    display: flex;
    place-items: center;
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

const ArrowTestDiv = styled.div`
    width: auto;
    height: 100%;
    width: 10px;
    background-color: yellow;
    color: yellow;
    grid-row: 1 / 3;
    grid-column: 3 / 4;
    border: 2px solid black;
    margin-bottom: -35px;
`;

const ArrowTestImg = styled.div<IArrowStyle>`
    background-image: url(${downArrow});
    background-size: 100% 100%;
    height: 100%;
    width: 13px;
    grid-row-start: ${(props) => props.row};
    grid-row-end: ${(props) => props.unlocksRow};
    grid-column-start: ${(props) => props.unlocksColumn};
    grid-column-end: ${(props) => props.unlocksColumn + 1};
    margin-bottom: -38px;
`;

const ButtonStyled = styled.button<IBackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
    border: 2px solid ${(props) => (props.isNodeCapped ? "var(--capped-node-color)" : "var(--uncapped-node-color)")};
    order: 2;
    border-radius: 4px;
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
    border-radius: 4px;
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

export const TalentNode: FC<TalentNodeProps> = ({ talentNode, specTalentPoints, talentUp, talentDown }) => {
    const [isNodeCapped, setIsNodeCapped] = useState<boolean>(false);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    useEffect(() => {
        talentNode.numberOfRanks === talentNode.pointsSpent ? setIsNodeCapped(true) : setIsNodeCapped(false);
    }, [talentNode.pointsSpent, talentNode.numberOfRanks]);

    return (
        <>
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
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => talentUp(talentNode.talentNodeId, e)}
                        onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) =>
                            talentDown(talentNode.talentNodeId, e)
                        }
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    />
                    <NodePoints
                        isNodeCapped={isNodeCapped}
                    >{`${talentNode.pointsSpent}/${talentNode.numberOfRanks}`}</NodePoints>
                </div>
                {/* {talentNode.talentNodeId === 3 && <ArrowTest></ArrowTest>} */}
                {showTooltip && <NodeTooltip nodeFields={talentNode} currentNodeRank={talentNode.pointsSpent} />}
                {/* {talentNode.talentNodeId === 7 && <NodeTooltip nodeFields={talentNode} currentNodeRank={talentNode.pointsSpent} />} */}
            </ButtonContainer>
            {talentNode.unlocksColumn && (
                <ArrowTestImg
                    row={talentNode.row}
                    column={talentNode.column}
                    unlocksRow={talentNode.unlocksRow}
                    unlocksColumn={talentNode.unlocksColumn}
                />
            )}
        </>
    );
};
