import React from 'react';
import Button from './Button';


export default {
    title: "Components/v1/Button1",
    component: Button,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Button {...args} />

export const Red:any =  Template.bind({});
Red.args = {
    backgroundColor: 'red',
    label: 'press me', 
    size: 'md'
}

export const Green:any = Template.bind({});

Green.args = {
    backgroundColor: 'green',
    label: 'press me', 
    size: 'md'
}