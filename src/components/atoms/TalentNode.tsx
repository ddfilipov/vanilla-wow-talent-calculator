import { FC } from "react";
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
}

export const TalentNode: FC<TalentNodeProps> = ({ handleClick }) => {
    return (
        <ButtonContainer>
            <ButtonStyled
                backgroundImage={foto}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
                onContextMenu={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
            ></ButtonStyled>
            <NodePoints>0/3</NodePoints>
        </ButtonContainer>
    );
};
