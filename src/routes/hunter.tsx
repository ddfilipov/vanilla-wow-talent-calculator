import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/hunter_tree_bm.jpeg";
import second_spec_background from "../images/hunter_tree_marksmanship.jpeg";
import third_spec_background from "../images/hunter_tree_survival.jpeg";
import first_spec_icon from "../images/hunter_spec_bm.jpg";
import second_spec_icon from "../images/hunter_spec_marksmanship.jpg";
import third_spec_icon from "../images/hunter_spec_survival.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Hunter() {
    const talentTreeData: ITalentTreeData = {
        className: "hunter",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Beast Mastery",
            secondSpecName: "Marksmanship",
            thirdSpecName: "Survival",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeData} />;
}