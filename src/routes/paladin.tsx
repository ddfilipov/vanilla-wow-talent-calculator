import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/paladin_tree_holy.jpeg";
import second_spec_background from "../images/paladin_tree_protection.jpeg";
import third_spec_background from "../images/paladin_tree_retribution.jpeg";
import first_spec_icon from "../images/paladin_spec_holy.jpg";
import second_spec_icon from "../images/paladin_spec_protection.jpg";
import third_spec_icon from "../images/paladin_spec_retribution.jpg";
import { IClassData } from "../interfaces";

export default function Paladin() {
    const classData: IClassData = {
        classId: 1,
        className: "Paladin",
        specData: [
            { specId: "firstSpec", specName: "Holy", specIcon: first_spec_icon, specBackground: first_spec_background },
            {
                specId: "secondSpec",
                specName: "Protection",
                specIcon: second_spec_icon,
                specBackground: second_spec_background,
            },
            {
                specId: "thirdSpec",
                specName: "Retribution",
                specIcon: third_spec_icon,
                specBackground: third_spec_background,
            },
        ],
    };

    return <TalentArea data={classData} />;
}
