import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/rogue_tree_assassination.jpeg";
import second_spec_background from "../images/rogue_tree_combat.jpeg";
import third_spec_background from "../images/rogue_tree_subtlety.jpeg";
import first_spec_icon from "../images/hunter_spec_bm.jpg";
import second_spec_icon from "../images/hunter_spec_marksmanship.jpg";
import third_spec_icon from "../images/hunter_spec_survival.jpg";
import { IClassIconStuff } from "../interfaces";

export default function Rogue() {
    const talentTreeBackgroundImgs: IClassIconStuff = {
        className: "rogue",
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

    // return <TalentArea talentTreeImages={talentTreeBackgroundImgs} />;
    return <TalentArea data={talentTreeBackgroundImgs} />;
}
