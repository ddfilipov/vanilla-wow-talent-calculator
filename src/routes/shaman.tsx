import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/shaman_tree_elemental.jpeg";
import second_spec_background from "../images/shaman_tree_enhancement.jpeg";
import third_spec_background from "../images/shaman_tree_restoration.jpeg";
import first_spec_icon from "../images/shaman_spec_elemental.jpg";
import second_spec_icon from "../images/shaman_spec_enhancement.jpg";
import third_spec_icon from "../images/shaman_spec_restoration.jpg";
import { IClassData } from "../interfaces";

export default function Shaman() {
    const classData: IClassData = {
        classId: 1,
        className: "Shaman",
        specData: [
            {
                specId: "firstSpec",
                specName: "Elemental",
                specIcon: first_spec_icon,
                specBackground: first_spec_background,
            },
            {
                specId: "secondSpec",
                specName: "Enhancement",
                specIcon: second_spec_icon,
                specBackground: second_spec_background,
            },
            {
                specId: "thirdSpec",
                specName: "Restoration",
                specIcon: third_spec_icon,
                specBackground: third_spec_background,
            },
        ],
    };

    return <TalentArea data={classData} />;
}
