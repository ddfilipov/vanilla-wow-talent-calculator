import { TalentArea } from "../components/organisms/TalentArea";
import arms from "../images/warrior_tree_arms.jpeg";
import fury from "../images/warrior_tree_fury.jpeg";
import protection from "../images/warrior_tree_protection.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Mage() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: arms,
        secondTalentTreeKey: fury,
        thirdTalentTreeKey: protection,
    };

    return <TalentArea className="mage" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
