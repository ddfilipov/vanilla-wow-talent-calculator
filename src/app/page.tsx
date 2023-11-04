import { Metadata } from "next";

import { RootComponent } from "@/atomic/organisms/RootComponent";
import { classData } from "@/data/classData";

export const metadata: Metadata = {
    title: "Choose a class",
};

export default async function Home() {
    return (
        <>
            <RootComponent />
        </>
    );
}
