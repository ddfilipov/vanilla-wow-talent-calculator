import { TreesComponent } from "@/atomic/organisms/TreesComponent";
import { PlayableClassesType } from "@/utils/consts";
import { redirect } from "next/navigation";

export default function ClassPage({ params }: { params: { slug: string } }) {
    if (!doesClassExist(params.slug)) {
        redirect("/");
    }
    return <TreesComponent className={params.slug} />;
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
