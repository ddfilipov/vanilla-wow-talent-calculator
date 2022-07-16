import { TalentArea } from "../components/organisms/TalentArea";
import bm from "../images/hunter_tree_bm.jpeg";
import marksmanship from "../images/hunter_tree_marksmanship.jpeg";
import survival from "../images/hunter_tree_survival.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Hunter() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: bm,
        secondTalentTreeKey: marksmanship,
        thirdTalentTreeKey: survival,
    };

    return <TalentArea className="hunter" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
