import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/warlock_tree_affliction.jpeg";
import second_spec_background from "../images/warlock_tree_demonology.jpeg";
import third_spec_background from "../images/warlock_tree_destruction.jpeg";
import first_spec_icon from "../images/warlock_spec_affliction.jpg";
import second_spec_icon from "../images/warlock_spec_demonology.jpg";
import third_spec_icon from "../images/warlock_spec_destruction.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Warlock() {
    const talentTreeData: ITalentTreeData = {
        className: "warlock",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Affliction",
            secondSpecName: "Demonology",
            thirdSpecName: "Destruction",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
