import { TalentArea } from "../components/organisms/TalentArea";
import assassination from "../images/rogue_tree_assassination.jpeg";
import combat from "../images/rogue_tree_combat.jpeg";
import subtlety from "../images/rogue_tree_subtlety.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Rogue() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: assassination,
        secondTalentTreeKey: combat,
        thirdTalentTreeKey: subtlety,
    };

    return <TalentArea className="rogue" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
