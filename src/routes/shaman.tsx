import { TalentArea } from "../components/organisms/TalentArea";
import elemental from "../images/shaman_tree_elemental.jpeg";
import enhancement from "../images/shaman_tree_enhancement.jpeg";
import restoration from "../images/shaman_tree_restoration.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Shaman() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: elemental,
        secondTalentTreeKey: enhancement,
        thirdTalentTreeKey: restoration,
    };

    return <TalentArea className="shaman" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
