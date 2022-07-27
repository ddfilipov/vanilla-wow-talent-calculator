import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/hunter_tree_bm.jpeg";
import second_spec_background from "../images/hunter_tree_marksmanship.jpeg";
import third_spec_background from "../images/hunter_tree_survival.jpeg";
import first_spec_icon from "../images/hunter_spec_bm.jpg";
import second_spec_icon from "../images/hunter_spec_marksmanship.jpg";
import third_spec_icon from "../images/hunter_spec_survival.jpg";
import { IClassData } from "../interfaces";

export default function Hunter() {

    const talentTreeData: IClassData = {
        classId: 1,
        className: "Hunter",
        specData: [
            { specId: 1, specName: "Beast Mastery", specIcon: first_spec_icon, specBackground: first_spec_background },
            { specId: 2, specName: "Marksmanship", specIcon: second_spec_icon, specBackground: second_spec_background },
            { specId: 3, specName: "Survival", specIcon: third_spec_icon, specBackground: third_spec_background },
        ],
    };

    return <TalentArea data={talentTreeData} />;
}
