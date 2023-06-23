import React from 'react';
import Input from './Input';
import InputAdornments from './InputAdornments';
import InputWithIcon from './InputWithIcon';


export default {
    title: "Components/v1/Input",
    component: Input,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <Input {...args} />
const TemplateAdroment = (args:any) => <InputAdornments {...args} />

// const Tempalte1 = (args:any) => <CheckboxWithLabel {...args}/>
// export const DefaultWithLable:any = Tempalte1.bind({});
// DefaultWithLable.args = {
//     label: "Hello World"
// }
export const Default:any =  Template.bind({});
export const AdromentDefault:any = TemplateAdroment.bind({});


AdromentDefault.agr = {
    label: "Hello World"
}


Default.args = {
}



