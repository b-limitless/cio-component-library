import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { style } from "../Styles";

export interface SelectWithAvatarInterface {
    label: string;
    showOptionLabel: string;
    avatarProps: string;
    data: any[];
    renderOptionProps: string[];
    country?: boolean

}

export default function SelectWithAvatar({ label, showOptionLabel, avatarProps, data, renderOptionProps, country }: SelectWithAvatarInterface) {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{
                ...style, '& .MuiInputBase-root': {
                    fontFamily: 'Figtree, sans-serif', // Change the font here
                },
            }}
            options={data}
            autoHighlight
            getOptionLabel={(option: any) => option[showOptionLabel]}
            renderOption={(props, option: any) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {/* If you need country use this insted */}
                      {/* {!country && <img
                         loading="lazy"
                         width="20"
                         src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                         srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                         alt=""
                     /> } */}
                
                    <img
                        loading="lazy"
                        width="40"
                        src={country ? `https://flagcdn.com/w20/${option.code.toLowerCase()}.png` : option[avatarProps]}
                        srcSet={country ? `https://flagcdn.com/w20/${option.code.toLowerCase()}.png` : option[avatarProps]}
                        alt=""
                    />
                    {renderOptionProps.map((opt, i) => <>{option[opt]} </>)}
                </Box>
            )}
            renderInput={(params) => (
                <TextField

                    {...params}
                    label={label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}

        />


    );
}


interface CountryType {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
}
