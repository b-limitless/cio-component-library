import React from 'react';
import FormContainer from './FormContainer';


export default {
    title: "Components/v1/FormContainer",
    component: FormContainer,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <FormContainer {...args} />

export const Default:any =  Template.bind({});
Default.args = {
    children:<h1>Hello Wrold</h1>, 
    buttonVariant: "primary", 
    buttonText: "Hello World"
}
