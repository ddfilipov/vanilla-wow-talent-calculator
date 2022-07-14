import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    border: 1px solid white;
    width: 1000px;
    height: 700px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const MainPage: FC = () => {
    return (
        <MainContainer>
            <Container>
                <ClassChooser />
            </Container>
        </MainContainer>
    );
};
