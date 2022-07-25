import { FC } from "react";
import styled from "styled-components";
import { BackgroundImage } from "../molecules/TalentTree";
import foto from "../../images/warrior_talent_rend.jpg";

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
`;

const clickNode = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.type === "click") {
        console.log("left click");
    } else if (e.type === "contextmenu") {
        console.log("right click");
    }
    e.preventDefault();
};

export interface TalentNodeProps {
    handleClickNode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TalentNode: FC<TalentNodeProps> = ({ handleClickNode }) => {
    return (
        <ButtonContainer>
            <ButtonStyled
                backgroundImage={foto}
                onClick={handleClickNode}
                onContextMenu={handleClickNode}
            ></ButtonStyled>
        </ButtonContainer>
    );
};
