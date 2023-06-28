import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { defaultFont, style } from '../Styles';
import { ChangeEvent } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export interface MultipleSelectCheckmarksInterface  {
    data: string[];
    label: string;
    setter:Function;
    getter:string[];
    id: string;
    handleChange: any;
}

export default function MultipleSelectCheckmarks({handleChange, data, label, getter, id}: MultipleSelectCheckmarksInterface) {
   
    return (
        <div>
            <FormControl sx={{...style, m: 1, width: 300 }}>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    labelId={id}
                    id={id}
                    multiple
                    value={getter}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {data.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={getter.indexOf(name) > -1} />
                            <ListItemText sx={{...defaultFont}} primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}