import { FC, useState } from "react";
import styled from "styled-components";
import { BackgroundImage } from "../molecules/TalentTree";
import foto from "../../images/warrior_talent_rend.jpg";

const ButtonContainer = styled.div`
    height: 45px;
    width: 45px;
    position: relative;
`;

const ButtonStyled = styled.button<BackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
    border: 2px solid rgba(64, 191, 64, 0.8);
`;

const NodePoints = styled.span`
    bottom: 2px;
    right: 2px;
    font-size: 13px;
    justify-self: right;
    position: absolute;
    user-select: none;
    cursor: pointer;
    color: rgba(64, 191, 64, 0.8);
    z-index: 100;
    background-color: black;
    padding: 0 1px;
`;

export interface TalentNodeProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    maxNodePoints: number;
}

export const TalentNode: FC<TalentNodeProps> = ({ handleClick, maxNodePoints }) => {
    const [currentPoints, setCurrentPoints] = useState<number>(0);

    const pointsUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPoints(currentPoints + 1);
        handleClick(e);
    };

    const pointsDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPoints(currentPoints - 1);
        handleClick(e);
    };

    return (
        <ButtonContainer>
            <ButtonStyled
                backgroundImage={foto}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => pointsUp(e)}
                onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) => pointsDown(e)}
            ></ButtonStyled>
            <NodePoints>{`${currentPoints}/${maxNodePoints}`}</NodePoints>
        </ButtonContainer>
    );
};
