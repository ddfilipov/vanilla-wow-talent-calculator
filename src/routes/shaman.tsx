import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/shaman_tree_elemental.jpeg";
import second_spec_background from "../images/shaman_tree_enhancement.jpeg";
import third_spec_background from "../images/shaman_tree_restoration.jpeg";
import first_spec_icon from "../images/shaman_spec_elemental.jpg";
import second_spec_icon from "../images/shaman_spec_enhancement.jpg";
import third_spec_icon from "../images/shaman_spec_restoration.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Shaman() {
    const talentTreeData: ITalentTreeData = {
        classId: 7,
        className: "shaman",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Elemental",
            secondSpecName: "Enhancement",
            thirdSpecName: "Restoration",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
