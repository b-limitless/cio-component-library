import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { style } from "../Styles";


export interface BasicDatePicker {
  styleProps: any;
  label: string;
}
export default function BasicDatePicker({styleProps, label}: BasicDatePicker) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker

        sx={{...style, ...styleProps}}
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // @ts-ignore
        renderInput={(params:any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}