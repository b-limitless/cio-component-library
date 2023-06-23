import React from 'react';
import TextArea from './TextArea';


export default {
    title: "Components/v1/TextArea",
    component: TextArea,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <TextArea {...args} />


export const Green:any = Template.bind({});

Green.args = {
    label: "Hello World"
}