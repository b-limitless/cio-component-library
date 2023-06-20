import styled from '@emotion/styled';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import * as React from 'react';
import { colors } from '../../config/colors';
import { defaultFont } from '../Styles/common.style';

interface SwitchInterfaces {
    label: string;
    size?: any;
    [x: string]: any
}

const CustomSwitch = styled(Switch)`
  .MuiSwitch-switchBase.Mui-checked {
    color: ${colors.primary}; 
  }
`;

export default function BasicSwitches({ label, ...rest }: SwitchInterfaces) {
    return (
        <FormControlLabel sx={defaultFont} control={<CustomSwitch {...rest} />} label={label} />
    );
}