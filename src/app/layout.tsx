"use client";
import { Inter } from "next/font/google";
import styled from "styled-components";
import GlobalStyle from "@/styles/GlobalStyles";

const inter = Inter({ subsets: ["latin"] });

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: var(--main-area-background);
    padding: 1rem;
    border-radius: 0.2rem;
    border: 1px solid var(--main-area-border);

    @media (width < 768px) {
        min-width: 280px;
        min-height: 300px;
    }
    @media (width >= 768px) {
        min-height: 500px;
    }
    @media (width >= 1250px) {
        max-width: 1200px;
        min-width: 750px;
        max-height: 700px;
    }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <GlobalStyle />
            <html lang="en">
                <body>
                    <MainContainer>
                        <Container>{children}</Container>
                    </MainContainer>
                </body>
            </html>
        </>
    );
}
