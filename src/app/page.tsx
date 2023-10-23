import styled from "styled-components";
import { MainPage } from "@/atomic/organisms/MainPage";

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    border: 1px solid white;
    width: 1200px;
    height: 700px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;

export default function Home() {
    return (
        <MainContainer>
            <Container>
                <MainPage />
            </Container>
        </MainContainer>
    );
}
