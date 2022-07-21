import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/druid_tree_balance.jpeg";
import second_spec_background from "../images/druid_tree_feral.jpeg";
import third_spec_background from "../images/druid_tree_restoration.jpeg";
import first_spec_icon from "../images/druid_spec_balance.jpg";
import second_spec_icon from "../images/druid_spec_feral.jpg";
import third_spec_icon from "../images/druid_spec_restoration.jpg";
import { ITalentTreeData } from "../interfaces";

export default function Druid() {
    const talentTreeData: ITalentTreeData = {
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

    return <TalentArea data={talentTreeData} />;
}
