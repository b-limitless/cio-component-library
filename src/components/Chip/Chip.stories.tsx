import React from 'react';
import Chip from './Chip';

export default {
    title: "Components/v1/Chip",
    component: Chip,
    argTypes: { handleClick: { action: 'handleClick' } }
}

const Template = (args: any) => <Chip {...args} />

export const Default: any = Template.bind({});

Default.args = {
    options: ["Hello", "World"],
    value: [],
    id: "id",
    label: "label",
    handleChange: () => { }
}