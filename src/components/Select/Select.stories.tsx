import React from 'react';
import Select from './Select';

export default {
    title: "Components/v1/Select",
    component: Select,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Select {...args} />

export const Default:any =  Template.bind({});

Default.args = {
    options:[{name: "hello", value: "world"}],
    label:"Hello World",
    value:"Hello World",
    onChange:() => {},
    id: "id",
}

