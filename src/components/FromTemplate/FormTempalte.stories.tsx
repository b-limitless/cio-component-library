import React from 'react';
import FormTemplate from './FormTemplate';


export default {
    title: "Components/v1/FormTemplate",
    component: FormTemplate,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <FormTemplate {...args} ><h1>Hello World</h1></FormTemplate>

export const Steps:any =  Template.bind({});

// Red.args = {
    
// }



// Green.args = {
//     backgroundColor: 'green',
//     label: 'press me', 
//     size: 'md'
// }