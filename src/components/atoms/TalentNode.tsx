import { FC } from "react";
import styled from "styled-components";
import { BackgroundImage } from "../molecules/TalentTree";
import foto from "../../images/warrior_talent_rend.jpg";
import { SpecIdType } from "../../interfaces";

const Container = styled.div<BackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
`;

const ButtonContainer = styled.div`
    height: 38px;
    width: 38px;
`;

const ButtonStyled = styled.button<BackgroundImage>`
    height: 38px;
    width: 38px;
    background-image: url(${(props) => props.backgroundImage});
    cursor: pointer;
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
        </ButtonContainer>
    );
};
