import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import foto from "../../images/warrior_talent_rend.jpg";

const ButtonContainer = styled.div`
    height: 45px;
    width: 45px;
    position: relative;
`;

const ButtonStyled = styled.button<IBackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
    border: 2px solid ${(props) => (props.isNodeCapped ? "rgba(255,209,0,0.8)" : "rgba(64, 191, 64, 0.8)")};
`;

const NodePoints = styled.span<INodePoints>`
    bottom: 2px;
    right: 2px;
    font-size: 13px;
    justify-self: right;
    position: absolute;
    user-select: none;
    cursor: pointer;
    color: ${(props) => (props.isNodeCapped ? "rgba(255,209,0,0.8)" : "rgba(64, 191, 64, 0.8)")};
    z-index: 100;
    background-color: black;
    padding: 0 1px;
`;

export interface TalentNodeProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    maxNodePoints: number;
    remainingTalentPoints: number;
    talentIcon: string;
}

interface INodePoints {
    isNodeCapped: boolean;
}
interface IBackgroundImage extends INodePoints {
    backgroundImage: string;
}

export const TalentNode: FC<TalentNodeProps> = ({ handleClick, maxNodePoints, remainingTalentPoints, talentIcon }) => {
    const [currentPoints, setCurrentPoints] = useState<number>(0);
    const [isNodeCapped, setIsNodeCapped] = useState<boolean>(false);

    const pointsUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (currentPoints < maxNodePoints && remainingTalentPoints > 0) {
            handleClick(e);
            setCurrentPoints(currentPoints + 1);
        }
    };

    const pointsDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (currentPoints > 0) {
            setCurrentPoints(currentPoints - 1);
            handleClick(e);
        }
    };

    console.log("talentIcon:", talentIcon);
    useEffect(() => {
        maxNodePoints === currentPoints ? setIsNodeCapped(true) : setIsNodeCapped(false);
    }, [currentPoints, maxNodePoints]);

    return (
        <ButtonContainer>
            <ButtonStyled
                // TODO: understand how did I pass this route!! ../../ from public/images works but src/images doesnt????
                backgroundImage={talentIcon}
                isNodeCapped={isNodeCapped}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => pointsUp(e)}
                onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) => pointsDown(e)}
            ></ButtonStyled>
            <NodePoints isNodeCapped={isNodeCapped}>{`${currentPoints}/${maxNodePoints}`}</NodePoints>
        </ButtonContainer>
    );
};
