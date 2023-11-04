import { TalentCalculator } from "@/atomic/organisms/TalentCalculator";
import { classData } from "@/data/classData";
import { PlayableClassesType } from "@/utils/consts";
import { redirect } from "next/navigation";

export default async function ClassPage({ params }: { params: { slug: PlayableClassesType } }) {
    if (!doesClassExist(params.slug)) {
        redirect("/");
    }
    //TODO: var must be typed!
    const fetchedClass = await getClassData(params.slug);
    return <TalentCalculator className={params.slug} classData={fetchedClass}/>;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const capitalizedSlug = params.slug[0].toUpperCase() + params.slug.slice(1, params.slug.length);
    return {
        title: capitalizedSlug,
    };
}

function doesClassExist(val: any): val is PlayableClassesType {
    return (
        [
            "druid",
            "hunter",
            "mage",
            "paladin",
            "priest",
            "rogue",
            "shaman",
            "warlock",
            "warrior",
        ] as PlayableClassesType[]
    ).includes(val);
}

//TODO: return must be typed!
const getClassData = async (className: PlayableClassesType) => {
    return new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
            const fetchedClass = classData.find((classinfo) => classinfo.className === "mage");
            resolve(fetchedClass);
        }, 1000);
    });
};
