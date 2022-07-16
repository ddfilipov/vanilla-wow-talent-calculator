import { TalentArea } from "../components/organisms/TalentArea";
import arcane from "../images/mage_tree_arcane.jpeg";
import fire from "../images/mage_tree_fire.jpeg";
import frost from "../images/mage_tree_frost.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Mage() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: arcane,
        secondTalentTreeKey: fire,
        thirdTalentTreeKey: frost,
    };

    return <TalentArea className="mage" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
