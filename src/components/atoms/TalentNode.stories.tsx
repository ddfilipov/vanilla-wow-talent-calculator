import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TalentNode } from "./TalentNode";

export default {
    title: "TalentNode",
    component: TalentNode,
} as ComponentMeta<typeof TalentNode>;

const Template: ComponentStory<typeof TalentNode> = (args) => <TalentNode {...args} />;

export const ClassIconStory: ComponentStory<typeof TalentNode> = () => (
    <TalentNode maxNodePoints={3} handleClick={() => {}} remainingTalentPoints={5}></TalentNode>
);
