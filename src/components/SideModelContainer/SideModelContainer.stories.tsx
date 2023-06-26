import React from 'react';
import SideModelContainer from './';
import BasicTabs from '../Tab/Tab';


export default {
    title: "Components/v1/SideModelContainer",
    component: SideModelContainer,
    argTypes: {handleClick: {action: 'handleClick'}}
}

const Template = (args:any) => <SideModelContainer {...args} >
<BasicTabs/>
</SideModelContainer>

export const Default:any =  Template.bind({});
Default.args = {
    showModel:false
}
