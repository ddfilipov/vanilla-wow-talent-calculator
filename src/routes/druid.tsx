import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/druid_tree_balance.jpeg";
import second_spec_background from "../images/druid_tree_feral.jpeg";
import third_spec_background from "../images/druid_tree_restoration.jpeg";
import first_spec_icon from "../images/druid_spec_balance.jpg";
import second_spec_icon from "../images/druid_spec_feral.jpg";
import third_spec_icon from "../images/druid_spec_restoration.jpg";
import { IClassData, ITalentTreeData } from "../interfaces";

export default function Druid() {
    const talentTreeData: ITalentTreeData = {
        classId: 1,
        className: "druid",
        specIcons: {
            firstSpecSrc: first_spec_icon,
            secondSpecSrc: second_spec_icon,
            thirdSpecSrc: third_spec_icon,
        },
        specNames: {
            firstSpecName: "Balance",
            secondSpecName: "Feral",
            thirdSpecName: "Restoration",
        },
        talentTreesBackgrounds: {
            firstTalentTreeKey: first_spec_background,
            secondTalentTreeKey: second_spec_background,
            thirdTalentTreeKey: third_spec_background,
        },
    };

    const talentTreeData2: IClassData = {
        classId: 1,
        className: "Druid",
        specData: [
            { specId: 1, specName: "Balance", specIcon: first_spec_icon, specBackground: first_spec_background },
            { specId: 2, specName: "Feral", specIcon: second_spec_icon, specBackground: second_spec_background },
            { specId: 3, specName: "Restoration", specIcon: third_spec_icon, specBackground: third_spec_background },
        ],
    };

    return <TalentArea data={talentTreeData} />;
}
