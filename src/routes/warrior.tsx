import { TalentArea } from "../components/organisms/TalentArea";
import first_spec_background from "../images/warrior_tree_arms.jpeg";
import second_spec_background from "../images/warrior_tree_fury.jpeg";
import third_spec_background from "../images/warrior_tree_protection.jpeg";
import first_spec_icon from "../images/warrior_spec_arms.jpg";
import second_spec_icon from "../images/warrior_spec_fury.jpg";
import third_spec_icon from "../images/warrior_spec_protection.jpg";
import { IClassData, ITalents } from "../interfaces";
import talents from "../data/talents/warrior-talents.json";

export default function Warrior() {
    const classData: IClassData = {
        classId: 9,
        className: "Warrior",
        specData: [
            { specId: "firstSpec", specName: "Arms", specIcon: first_spec_icon, specBackground: first_spec_background },
            {
                specId: "secondSpec",
                specName: "Fury",
                specIcon: second_spec_icon,
                specBackground: second_spec_background,
            },
            {
                specId: "thirdSpec",
                specName: "Protection",
                specIcon: third_spec_icon,
                specBackground: third_spec_background,
            },
        ],
    };

    const testFunction = new Promise<ITalents>(()=>{
        return Promise.resolve(talents);
    })
    // const talentRanks: ITalents = testFunction(); //Might have to use a Promise to get the data from the JSON

    return <TalentArea data={classData} talentRanks={talents} />;
}
