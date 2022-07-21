import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/warrior_tree_arms.jpeg";
import second_spec_background from "../images/warrior_tree_fury.jpeg";
import third_spec_background from "../images/warrior_tree_protection.jpeg";
import first_spec_icon from "../images/warrior_spec_arms.jpg";
import second_spec_icon from "../images/warrior_spec_fury.jpg";
import third_spec_icon from "../images/warrior_spec_protection.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Warrior() {
    const talentTreeData: ITalentTreeData = {
        className: "warrior",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Arms",
            secondSpecName: "Fury",
            thirdSpecName: "Protection",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
