import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/paladin_tree_holy.jpeg";
import second_spec_background from "../images/paladin_tree_protection.jpeg";
import third_spec_background from "../images/paladin_tree_retribution.jpeg";
import first_spec_icon from "../images/paladin_spec_holy.jpg";
import second_spec_icon from "../images/paladin_spec_protection.jpg";
import third_spec_icon from "../images/paladin_spec_retribution.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Paladin() {
    const talentTreeData: ITalentTreeData = {
        className: "paladin",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Holy",
            secondSpecName: "Protection",
            thirdSpecName: "Retribution",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
