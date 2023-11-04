import { Metadata } from "next";

import { RootComponent } from "@/atomic/organisms/RootComponent";
import { classData } from "@/data/classData";

export const metadata: Metadata = {
    title: "Choose a class",
};

const getClassData = async () => {
    return new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
            resolve(classData);
        }, 1000);
    });
};

export default async function Home() {
    const fetchedClassData = await getClassData();
    console.log(fetchedClassData);
    return (
        <>
            <RootComponent fetchedClassData={fetchedClassData}/>
        </>
    );
}
