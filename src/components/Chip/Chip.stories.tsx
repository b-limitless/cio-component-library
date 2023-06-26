import React from 'react';
import Chip from './Chip';


export default {
    title: "Components/v1/Chip",
    component: Chip,
}

const Template = (args:any) => <Chip {...args} />

export const Default:any =  Template.bind({});

Default.args = {
    label:"HelloWorld",
    chipVariant: "lightred"
}

