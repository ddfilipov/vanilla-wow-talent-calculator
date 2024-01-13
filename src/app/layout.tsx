"use client";
import { Inter } from "next/font/google";
import styled from "styled-components";
import GlobalStyle from "@/styles/GlobalStyles";
import { breakpoints } from "@/styles/breakpoints";

const inter = Inter({ subsets: ["latin"] });

const MainContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: center;
    overflow: hidden;
    @media ((${breakpoints.tablet})) {
        height: 100vh;
        align-items: center;
    }
`;

const Container = styled.div`
    display: flex;
    gap: 10px;
    background-color: var(--main-area-background);
    padding: 1rem;
    border-radius: 0.2rem;
    border: 1px solid var(--main-area-border);
    flex-direction: column;
    min-width: 280px;
    min-height: 300px;
    @media ((${breakpoints.tablet})) {
        min-height: 500px;
        justify-content: center;
    }
    @media ((${breakpoints.desktop})) {
        max-width: 1200px;
        min-width: 750px;
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
