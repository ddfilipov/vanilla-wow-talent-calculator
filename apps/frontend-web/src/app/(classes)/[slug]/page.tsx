import { TalentCalculator } from "@/atomic/organisms/TalentCalculator";
import { ClassData } from "@/data/classData";
import { BASE_URL, PlayableClassesType } from "@/utils/consts";
import { redirect } from "next/navigation";

export default async function ClassPage({ params }: { params: { slug: PlayableClassesType } }) {
    if (!doesClassExist(params.slug)) {
        redirect("/");
    }
    const fetchedClass: ClassData = await fetchClassData(params.slug);
    return <TalentCalculator className={params.slug} classData={fetchedClass} />;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const capitalizedSlug = params.slug[0].toUpperCase() + params.slug.slice(1, params.slug.length);
    return {
        title: capitalizedSlug,
        description: "Level up your World of Warcraft class with this talent calculator",
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

const fetchClassData = async (className: PlayableClassesType) => {
    const params = new URLSearchParams({
        className: className,
    });
    const response = await fetch(`${BASE_URL}/class-data?${params.toString()}`);
    const jsonResponse = await response.json();
    return jsonResponse.data;
};
