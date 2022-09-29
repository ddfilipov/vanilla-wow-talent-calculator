import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TalentNode } from "./TalentNode";

export default {
    title: "TalentNode",
    component: TalentNode,
} as ComponentMeta<typeof TalentNode>;

const Template: ComponentStory<typeof TalentNode> = (args) => <TalentNode {...args} />;

// TODO: talentIcon needs to be smth
export const ClassIconStory: ComponentStory<typeof TalentNode> = () => (
    <TalentNode
        maxNodePoints={3}
        handleClick={() => {}}
        remainingTalentPoints={5}
        talentIcon={""}
        talentNode={null as any} // TODO: fix asap!
        treePointsRequiredToLvl={0}
    ></TalentNode>
);
