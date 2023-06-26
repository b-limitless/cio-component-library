import React from 'react';
import Tab from './Tab';


export default {
    title: "Components/v1/Tab",
    component: Tab,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Tab {...args} />

export const Red:any =  Template.bind({});
Red.args = {
    
}

