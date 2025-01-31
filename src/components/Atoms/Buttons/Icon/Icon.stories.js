import React from "react";
import { Button, BUTTON_OPTIONS } from "./";

export default {
	title: "Design System/Atoms/Buttons/Icon",
	component: Button,
	argTypes: {
		size: {
			control: {
				type: "select",
				options: [
					BUTTON_OPTIONS.SIZE.SMALL,
					BUTTON_OPTIONS.SIZE.MEDIUM,
					BUTTON_OPTIONS.SIZE.BIG,
				],
			},
		},
	},
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	size: BUTTON_OPTIONS.SIZE.BIG,
};
export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false };
