import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/priest_tree_discipline.jpeg";
import second_spec_background from "../images/priest_tree_holy.jpeg";
import third_spec_background from "../images/priest_tree_shadow.jpeg";
import first_spec_icon from "../images/priest_spec_discipline.jpg";
import second_spec_icon from "../images/priest_spec_holy.jpg";
import third_spec_icon from "../images/priest_spec_shadow.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Priest() {
    const talentTreeData: ITalentTreeData = {
        className: "priest",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Discipline",
            secondSpecName: "Holy",
            thirdSpecName: "Shadow",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}
