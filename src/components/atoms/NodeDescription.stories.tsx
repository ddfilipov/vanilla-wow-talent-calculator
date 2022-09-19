import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NodeDescription } from "./NodeDescription";
import warriorIcon from "../../images/class_warrior.jpg";

export default {
    title: "NodeDescription",
    component: NodeDescription,
} as ComponentMeta<typeof NodeDescription>;

const Template: ComponentStory<typeof NodeDescription> = (args) => <NodeDescription {...args} />;

export const ClassIconStory: ComponentStory<typeof NodeDescription> = () => <NodeDescription></NodeDescription>;
