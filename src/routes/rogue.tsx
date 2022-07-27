import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/rogue_tree_assassination.jpeg";
import second_spec_background from "../images/rogue_tree_combat.jpeg";
import third_spec_background from "../images/rogue_tree_subtlety.jpeg";
import first_spec_icon from "../images/rogue_spec_assassination.jpg";
import second_spec_icon from "../images/rogue_spec_combat.jpg";
import third_spec_icon from "../images/rogue_spec_subtlety.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Rogue() {
    const talentTreeData: ITalentTreeData = {
        classId: 6,
        className: "rogue",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Assassination",
            secondSpecName: "Combat",
            thirdSpecName: "Subtlety",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
