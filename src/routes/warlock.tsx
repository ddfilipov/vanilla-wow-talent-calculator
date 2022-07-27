import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/warlock_tree_affliction.jpeg";
import second_spec_background from "../images/warlock_tree_demonology.jpeg";
import third_spec_background from "../images/warlock_tree_destruction.jpeg";
import first_spec_icon from "../images/warlock_spec_affliction.jpg";
import second_spec_icon from "../images/warlock_spec_demonology.jpg";
import third_spec_icon from "../images/warlock_spec_destruction.jpg";
import { IClassData } from "../interfaces";

export default function Warlock() {
    const classData: IClassData = {
        classId: 1,
        className: "Warlock",
        specData: [
            { specId: 1, specName: "Affliction", specIcon: first_spec_icon, specBackground: first_spec_background },
            { specId: 2, specName: "Demonology", specIcon: second_spec_icon, specBackground: second_spec_background },
            { specId: 3, specName: "Destruction", specIcon: third_spec_icon, specBackground: third_spec_background },
        ],
    };

    return <TalentArea data={classData} />;
}
