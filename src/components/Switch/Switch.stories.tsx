import React from 'react';
import Checkbox from './Switch';


export default {
    title: "Components/v1/Checkbox",
    component: Checkbox,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Checkbox {...args} />


export const Green:any = Template.bind({});

Green.args = {
    label: "Hello World"
}