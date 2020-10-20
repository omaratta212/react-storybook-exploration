import React from "react";
import {Button} from "../../components/Button/Button";
import {ButtonProps, ButtonSize, ButtonType} from "../../components/Button/ButtonProps";
import {Story} from '@storybook/react/types-6-0';

export default {
  title: 'Button Component',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;


export const Primary = Template.bind({});
Primary.args = {
  text: "Click Me! I'm done",
  type: ButtonType.primary,
  size: ButtonSize.large
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: ButtonType.secondary,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Primary.args,
  type: ButtonType.outlined,
};
