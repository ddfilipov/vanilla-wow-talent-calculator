"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const Container = styled.div`
    border: 1px solid #212e46;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background-color: #050c18;
    padding: 1rem;
    border-radius: 0.2rem;

    @media (width < 768px) {
        min-width: 280px;
        /* background-color: red; */
        min-height: 300px;
    }
    @media (width >= 768px) {
        width: 400px;
        min-height: 500px;
        /* background-color: blue; */
    }
    @media (width >= 1250px) {
        max-width: 1200px;
        min-width: 750px;
        height: 700px;
        /* background-color: green; */
    }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <MainContainer>
                    <Container>{children}</Container>
                </MainContainer>
            </body>
        </html>
    );
}
