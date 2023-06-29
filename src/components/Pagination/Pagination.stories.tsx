import React from 'react';
import Pagination from './Pagination';


export default {
    title: "Components/v1/Pagination",
    component: Pagination
}

const Template = (args:any) => <Pagination {...args} />

export const Default:any =  Template.bind({});
Default.args = {
 
}
