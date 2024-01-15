import { TalentCalculator } from "@/atomic/organisms/TalentCalculator";
import { ClassData, classData } from "@/data/classData";
import { PlayableClassesType } from "@/utils/consts";
import { redirect } from "next/navigation";

export default async function ClassPage({ params }: { params: { slug: PlayableClassesType } }) {
    if (!doesClassExist(params.slug)) {
        redirect("/");
    }
    const fetchedClass: ClassData = await getClassData(params.slug);
    return <TalentCalculator className={params.slug} classData={fetchedClass} />;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const capitalizedSlug = params.slug[0].toUpperCase() + params.slug.slice(1, params.slug.length);
    return {
        title: capitalizedSlug,
        description: "Level up your World of Warcraft class with this talent calculator"
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

const getClassData = async (className: PlayableClassesType) => {
    return new Promise<ClassData>((resolve: any, reject: any) => {
        setTimeout(() => {
            const fetchedClass = classData.find((classinfo) => classinfo.className === className);
            resolve(fetchedClass);
        }, 0);
    });
};
