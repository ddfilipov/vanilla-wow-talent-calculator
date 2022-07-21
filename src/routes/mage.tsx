import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/mage_tree_arcane.jpeg";
import second_spec_background from "../images/mage_tree_fire.jpeg";
import third_spec_background from "../images/mage_tree_frost.jpeg";
import first_spec_icon from "../images/mage_spec_arcane.jpg";
import second_spec_icon from "../images/mage_spec_fire.jpg";
import third_spec_icon from "../images/mage_spec_frost.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Mage() {
    const talentTreeData: ITalentTreeData = {
        className: "mage",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Arcane",
            secondSpecName: "Fire",
            thirdSpecName: "Frost",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
