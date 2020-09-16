import React from "react";
import {Meta, Story} from "@storybook/react";
import {ExampleComponent, IExampleComponentProps} from "./ExampleComponent";

export default {
    title: "components/ExampleComponent",
    component: ExampleComponent,
    args: {
        text: "test arg"
    }
} as Meta<IExampleComponentProps>;

const Template: Story<IExampleComponentProps> = (args) => (
    <ExampleComponent {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
    text: "test"
};

Primary.storyName = "Test Name"