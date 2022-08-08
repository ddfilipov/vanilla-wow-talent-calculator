import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/rogue_tree_assassination.jpeg";
import second_spec_background from "../images/rogue_tree_combat.jpeg";
import third_spec_background from "../images/rogue_tree_subtlety.jpeg";
import first_spec_icon from "../images/rogue_spec_assassination.jpg";
import second_spec_icon from "../images/rogue_spec_combat.jpg";
import third_spec_icon from "../images/rogue_spec_subtlety.jpg";
import { IClassData } from "../interfaces";

export default function Rogue() {
    const classData: IClassData = {
        classId: 6,
        className: "Rogue",
        specData: [
            {
                specId: "firstSpec",
                specName: "Assassination",
                specIcon: first_spec_icon,
                specBackground: first_spec_background,
            },
            {
                specId: "secondSpec",
                specName: "Combat",
                specIcon: second_spec_icon,
                specBackground: second_spec_background,
            },
            {
                specId: "thirdSpec",
                specName: "Subtlety",
                specIcon: third_spec_icon,
                specBackground: third_spec_background,
            },
        ],
    };

    return <TalentArea data={classData} />;
}
