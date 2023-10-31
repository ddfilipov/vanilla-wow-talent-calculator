import { Metadata } from "next";

import { MainPage } from "@/atomic/organisms/MainPage";

export const metadata: Metadata = {
    title: "Choose a class",
};

export default function Home() {
    return (
        <>
            <MainPage />
        </>
    );
}
