import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { defaultFont } from '../Styles/common.style';

interface SimpleAccordionInterface {
    children: React.ReactNode;
    title: string;
    id: string;
    ariaControls: string;
}


export default function SimpleAccordion({ children, title, id, ariaControls }: SimpleAccordionInterface) {
    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={ariaControls}
                id={id}
            >
                <Typography sx={defaultFont}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}