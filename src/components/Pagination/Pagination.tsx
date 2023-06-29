import Pagination from '@mui/material/Pagination';
import * as React from 'react';
import { defaultFont } from '../Styles';

export interface PaginationControlledInterface {
    count: number;
    page: number;
    setPage: Function;
}

export default function PaginationControlled({count, page = 1, setPage}: PaginationControlledInterface) {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Pagination sx={{ ...defaultFont }} count={count} page={page} onChange={handleChange} />
    );
}