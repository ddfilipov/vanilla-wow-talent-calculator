import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NodeTooltip } from "./NodeTooltip";
import warriorIcon from "../../images/class_warrior.jpg";

export default {
    title: "NodeDescription",
    component: NodeTooltip,
} as ComponentMeta<typeof NodeTooltip>;

const Template: ComponentStory<typeof NodeTooltip> = (args) => <NodeTooltip {...args} />;

export const ClassIconStory: ComponentStory<typeof NodeTooltip> = () => <NodeTooltip></NodeTooltip>;
