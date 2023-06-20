import React from 'react';
import Switch from './Switch';


export default {
    title: "Components/v1/Switch",
    component: Switch,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Switch {...args} />


export const Green:any = Template.bind({});

Green.args = {
    label: "Hello World"
}