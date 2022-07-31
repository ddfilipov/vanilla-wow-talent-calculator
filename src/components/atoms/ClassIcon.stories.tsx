import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ClassIcon } from "./ClassIcon";
import warriorIcon from "../../images/class_warrior.jpg";

export default {
    title: "ClassIcon",
    component: ClassIcon,
} as ComponentMeta<typeof ClassIcon>;

const Template: ComponentStory<typeof ClassIcon> = (args) => <ClassIcon {...args} />;

export const ClassIconStory: ComponentStory<typeof ClassIcon> = () => (
    <ClassIcon alt="alt text" src={warriorIcon} href="/"></ClassIcon>
);
