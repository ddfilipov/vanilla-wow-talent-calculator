import { TalentArea } from "../components/organisms/TalentArea";
import discipline from "../images/priest_tree_discipline.jpeg";
import holy from "../images/priest_tree_holy.jpeg";
import shadow from "../images/priest_tree_shadow.jpeg";
import { ITalentTreeBackground } from "../interfaces";

export default function Priest() {
    const talentTreeBackgroundImgs: ITalentTreeBackground = {
        firstTalentTreeKey: discipline,
        secondTalentTreeKey: holy,
        thirdTalentTreeKey: shadow,
    };

    return <TalentArea className="priest" talentBackgroundImages={talentTreeBackgroundImgs} />;
}
