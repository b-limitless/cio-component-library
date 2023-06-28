import React from 'react';
import DatePicker from './DatePicker';


export default {
    title: "Components/v1/DatePicker",
    component: DatePicker,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <DatePicker {...args} />

export const Red:any =  Template.bind({});
Red.args = {
    styleProps: {width: "100%"}
}
