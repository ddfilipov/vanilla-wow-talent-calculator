import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/shaman_tree_elemental.jpeg";
import second_spec_background from "../images/shaman_tree_enhancement.jpeg";
import third_spec_background from "../images/shaman_tree_restoration.jpeg";
import first_spec_icon from "../images/hunter_spec_bm.jpg";
import second_spec_icon from "../images/hunter_spec_marksmanship.jpg";
import third_spec_icon from "../images/hunter_spec_survival.jpg";
import { IClassIconStuff } from "../interfaces";

export default function Shaman() {
    const talentTreeBackgroundImgs: IClassIconStuff = {
        className: "shaman",
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
