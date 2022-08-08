import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/mage_tree_arcane.jpeg";
import second_spec_background from "../images/mage_tree_fire.jpeg";
import third_spec_background from "../images/mage_tree_frost.jpeg";
import first_spec_icon from "../images/mage_spec_arcane.jpg";
import second_spec_icon from "../images/mage_spec_fire.jpg";
import third_spec_icon from "../images/mage_spec_frost.jpg";
import { IClassData } from "../interfaces";

export default function Mage() {
    const classData: IClassData = {
        classId: 3,
        className: "Mage",
        specData: [
            {
                specId: "firstSpec",
                specName: "Arcane",
                specIcon: first_spec_icon,
                specBackground: first_spec_background,
            },
            {
                specId: "secondSpec",
                specName: "Fire",
                specIcon: second_spec_icon,
                specBackground: second_spec_background,
            },
            {
                specId: "thirdSpec",
                specName: "Frost",
                specIcon: third_spec_icon,
                specBackground: third_spec_background,
            },
        ],
    };

    return <TalentArea data={classData} />;
}
