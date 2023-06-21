import React from 'react';
import Message from './';

import { svgCDNAssets } from '../../config/assets';
export default {
    title: "Components/v1/Message",
    component: Message,
    argTypes: { handleClick: { action: 'handleClick' } }
}

const Template = (args: any) => <Message {...args} />

export const Deafult: any = Template.bind({});

Deafult.args = {
    title: 'string',
    buttonText: 'string',
    buttonVariant: 'primary',
    icon: svgCDNAssets.successCheck,
}

