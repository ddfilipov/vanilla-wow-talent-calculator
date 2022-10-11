import { IClassWrapper } from "../interfaces";
import druid from "../images/class_druid.jpg";
import hunter from "../images/class_hunter.jpg";
import mage from "../images/class_mage.jpg";
import paladin from "../images/class_paladin.jpg";
import priest from "../images/class_priest.jpg";
import rogue from "../images/class_rogue.jpg";
import shaman from "../images/class_shaman.jpg";
import warlock from "../images/class_warlock.jpg";
import warrior from "../images/class_warrior.jpg";

export const classes: IClassWrapper = {
    ayuda: [
        { class: { name: "druid", src: druid } },
        { class: { name: "hunter", src: hunter } },
        { class: { name: "mage", src: mage } },
        { class: { name: "paladin", src: paladin } },
        { class: { name: "priest", src: priest } },
        { class: { name: "rogue", src: rogue } },
        { class: { name: "shaman", src: shaman } },
        { class: { name: "warlock", src: warlock } },
        { class: { name: "warrior", src: warrior } },
    ],
};
