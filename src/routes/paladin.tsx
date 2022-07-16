import { TalentArea } from "../components/organisms/TalentArea";
import holy from "../images/paladin_tree_holy.jpeg";
import protection from "../images/paladin_tree_protection.jpeg";
import retribution from "../images/paladin_tree_retribution.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Paladin() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: holy,
        secondTalentTreeKey: protection,
        thirdTalentTreeKey: retribution,
    };

    return <TalentArea className="paladin" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
