import React from 'react';
import Accordion from './';


export default {
    title: "Components/v1/Accordion",
    component: Accordion,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Accordion {...args} />


export const Green:any = Template.bind({});

Green.args = {
    title: "Hello World",
    children: <h1>Hello World</h1>
}