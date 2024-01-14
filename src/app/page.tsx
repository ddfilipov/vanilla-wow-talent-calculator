import { Metadata } from "next";

import { RootComponent } from "@/atomic/organisms/RootComponent";

export const metadata: Metadata = {
    title: "Choose a class",
    description:
        "This page's purpose is that the user can make their own World of Warcraft Vanilla builds. It is a talent calculator. It is also useful for World of Warcraft Classic",
};

export default function Home() {
    return (
        <>
            <RootComponent />
        </>
    );
}
