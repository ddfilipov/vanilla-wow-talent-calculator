import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TalentTreeGrid } from "./TalentTreeGrid";

export default {
    title: "TalentTreeGrid",
    component: TalentTreeGrid,
} as ComponentMeta<typeof TalentTreeGrid>;

const Template: ComponentStory<typeof TalentTreeGrid> = (args) => <TalentTreeGrid {...args} />;

export const ClassIconStory: ComponentStory<typeof TalentTreeGrid> = () => <TalentTreeGrid></TalentTreeGrid>;
