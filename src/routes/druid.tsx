import { TalentArea } from "../components/organisms/TalentArea";
import balance from "../images/druid_tree_balance.jpeg";
import feral from "../images/druid_tree_feral.jpeg";
import restoration from "../images/druid_tree_restoration.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Druid() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: balance,
        secondTalentTreeKey: feral,
        thirdTalentTreeKey: restoration,
    };

    return <TalentArea className="druid" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
