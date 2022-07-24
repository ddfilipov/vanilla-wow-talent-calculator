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

export interface TalentNodeProps {
    subirPuntos: () => void;
    bajarPuntos: () => void;
}

export const TalentNode: FC<TalentNodeProps> = ({ subirPuntos, bajarPuntos }) => {
    return (
        <ButtonContainer>
            <ButtonStyled backgroundImage={foto} onClick={subirPuntos}></ButtonStyled>
        </ButtonContainer>
    );
};
