import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/hunter_tree_bm.jpeg";
import second_spec_background from "../images/hunter_tree_marksmanship.jpeg";
import third_spec_background from "../images/hunter_tree_survival.jpeg";
import first_spec_icon from "../images/hunter_spec_bm.jpg";
import second_spec_icon from "../images/hunter_spec_marksmanship.jpg";
import third_spec_icon from "../images/hunter_spec_survival.jpg";
import { IClassData } from "../interfaces";

export default function Hunter() {
    const classData: IClassData = {
        classId: 1,
        className: "Hunter",
        specData: [
            {
                specId: "firstSpec",
                specName: "Beast Mastery",
                specIcon: first_spec_icon,
                specBackground: first_spec_background,
            },
            {
                specId: "secondSpec",
                specName: "Marksmanship",
                specIcon: second_spec_icon,
                specBackground: second_spec_background,
            },
            {
                specId: "thirdSpec",
                specName: "Survival",
                specIcon: third_spec_icon,
                specBackground: third_spec_background,
            },
        ],
    };

    return <TalentArea data={classData} />;
}
