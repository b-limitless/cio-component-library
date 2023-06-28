import React from 'react';
import SelectWithAvatar from './SelectWithAvatar';
import data from "../../mock/asignee.json";
import { countries } from '../../mock/countries';

export default {
    title: "Components/v1/SelectWithAvatar",
    component: SelectWithAvatar,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <SelectWithAvatar {...args} />
const CountryTemplat = (args:any) => <SelectWithAvatar {...args} />;

export const Default:any =  Template.bind({});
Default.args = {
    label: "Asingee",
    showOptionLabel:"fullName",
    avatarProps: "avatar",
    data, 
    renderOptionProps: ["fullName", "email"]
}

export const Country:any = CountryTemplat.bind({});

Country.args = {
    label: "Country",
    showOptionLabel:"label",
    avatarProps: "avatar",
    data:countries, 
    renderOptionProps: ["code", "label"],
    country: true
}
