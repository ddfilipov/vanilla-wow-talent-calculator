import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/druid_tree_balance.jpeg";
import second_spec_background from "../images/druid_tree_feral.jpeg";
import third_spec_background from "../images/druid_tree_restoration.jpeg";
import first_spec_icon from "../images/hunter_spec_bm.jpg";
import second_spec_icon from "../images/hunter_spec_marksmanship.jpg";
import third_spec_icon from "../images/hunter_spec_survival.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Druid() {
    const talentTreeBackgroundImgs: ITalentTreeData = {
        className: "druid",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    return <TalentArea data={talentTreeBackgroundImgs} />;
}
