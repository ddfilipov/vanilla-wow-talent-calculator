import druid from "@/../public/images/class-icons/class_druid.jpg";
import hunter from "@/../public/images/class-icons/class_hunter.jpg";
import mage from "@/../public/images/class-icons/class_mage.jpg";
import paladin from "@/../public/images/class-icons/class_paladin.jpg";
import priest from "@/../public/images/class-icons/class_priest.jpg";
import rogue from "@/../public/images/class-icons/class_rogue.jpg";
import shaman from "@/../public/images/class-icons/class_shaman.jpg";
import warlock from "@/../public/images/class-icons/class_warlock.jpg";
import warrior from "@/../public/images/class-icons/class_warrior.jpg";

export interface IClass {
    name: PlayableClassesType;
    src: string;
}
export type PlayableClassesType =
    | "druid"
    | "hunter"
    | "mage"
    | "paladin"
    | "priest"
    | "rogue"
    | "shaman"
    | "warlock"
    | "warrior";

export const playableClasses: IClass[] = [
    { name: "druid", src: druid.src },
    { name: "hunter", src: hunter.src },
    { name: "mage", src: mage.src },
    { name: "paladin", src: paladin.src },
    { name: "priest", src: priest.src },
    { name: "rogue", src: rogue.src },
    { name: "shaman", src: shaman.src },
    { name: "warlock", src: warlock.src },
    { name: "warrior", src: warrior.src },
];

// TODO: this should change when I implement tbc and wotlk talents
export const MAX_TALENT_POINTS: number = 51;
export const MIN_TALENT_POINTS: number = 51;
