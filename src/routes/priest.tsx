import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/priest_tree_discipline.jpeg";
import second_spec_background from "../images/priest_tree_holy.jpeg";
import third_spec_background from "../images/priest_tree_shadow.jpeg";
import first_spec_icon from "../images/priest_spec_discipline.jpg";
import second_spec_icon from "../images/priest_spec_holy.jpg";
import third_spec_icon from "../images/priest_spec_shadow.jpg";
import { IClassData } from "../interfaces";

export default function Priest() {
    const classData: IClassData = {
        classId: 1,
        className: "Priest",
        specData: [
            { specId: 1, specName: "Discipline", specIcon: first_spec_icon, specBackground: first_spec_background },
            { specId: 2, specName: "Holy", specIcon: second_spec_icon, specBackground: second_spec_background },
            { specId: 3, specName: "Shadow", specIcon: third_spec_icon, specBackground: third_spec_background },
        ],
    };

    return <TalentArea data={classData} />;
}
