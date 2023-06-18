import React from 'react';
import FormTemplate from './FormTemplate';


export default {
    title: "Components/v1/FormTemplate",
    component: FormTemplate,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <FormTemplate {...args} />

export const Steps:any =  Template.bind({});

// Red.args = {
    
// }



// Green.args = {
//     backgroundColor: 'green',
//     label: 'press me', 
//     size: 'md'
// }