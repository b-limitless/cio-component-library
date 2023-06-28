import React from 'react';
import Chip from './MultipleSelect';
import MultipleSelectWithCheckBox from "./MultipleSelectWithCheckBox";

export default {
    title: "Components/v1/MultipleSelect",
    component: Chip,
    argTypes: { handleClick: { action: 'handleClick' } }
}

const Template = (args: any) => <Chip {...args} />
const Template1 = (args:any) => <MultipleSelectWithCheckBox {...args}/>

export const Default: any = Template.bind({});
export const Default1: any = Template1.bind({});

Default.args = {
    options: ["Hello", "World"],
    value: [],
    id: "id",
    label: "label",
    handleChange: () => { }
}



const data = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

// const handleChange = (event: SelectChangeEvent<typeof getter>) => {
//     const {
//         target: { value },
//     } = event;
//     setter(
//         // On autofill we get a stringified value.
//         typeof value === 'string' ? value.split(',') : value,
//     );
// };

Default1.args = {
    data,
    label: "Filter",
    getter: [], 
    setter: function() {}, 
    id: "hello world", 
    handleChange: function(){}
}