// "use client";
import { Metadata } from "next";

import { MainPage } from "@/atomic/organisms/MainPage";
import GlobalStyle from "@/styles/GlobalStyles";

export const metadata: Metadata = {
    title: "Choose a class",
};

export default function Home() {
    return (
        <>
            {/* <GlobalStyle /> */}
            <MainPage />
        </>
    );
}
