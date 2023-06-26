import { Chip, ChipProps } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import React from 'react';
import styles from "./chip.module.scss";

type colors = 'green' | 'skyblue' | 'lightbrown' | 'lightred';

export interface ChipInterface {
  label: string;
  variant: OverridableStringUnion<'outlined', ChipProps['variant']>;
  chipVariant: colors
}

export default function BasicChips({ label, variant, chipVariant }: ChipInterface) {
  let defaultClasss = styles.chip;

  if (chipVariant === "green") {
    defaultClasss += ` ${styles.green}`;
  }

  if (chipVariant === "skyblue") {
    defaultClasss += ` ${styles.skyblue}`;
  }

  if (chipVariant === "lightbrown") {
    defaultClasss = ` ${styles.lightbrown}`;
  }

  if (chipVariant === "lightred") {
    defaultClasss = ` ${styles.lightred}`;
  }

  return <Chip label={label} variant={variant} className={defaultClasss} />;
}



