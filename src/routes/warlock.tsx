import { TalentArea } from "../components/organisms/TalentArea";
import affliction from "../images/warlock_tree_affliction.jpeg";
import demonology from "../images/warlock_tree_demonology.jpeg";
import destruction from "../images/warlock_tree_destruction.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Warlock() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: affliction,
        secondTalentTreeKey: demonology,
        thirdTalentTreeKey: destruction,
    };

    return <TalentArea className="warlock" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
