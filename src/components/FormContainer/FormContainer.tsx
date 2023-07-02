import React, { ReactNode } from 'react'
import styles from './form-container.module.scss';
import Button from '../Button';
import { variantType } from '../Button/Button';

type Props = {
    children: ReactNode, 
    buttonVariant: variantType, 
    buttonText: string;
}

export default function FormContainer({ children, buttonVariant, buttonText }: Props) {
    return (

        <div className={styles.form__container}>
            <div className={styles.form}>
                {children}
            </div>

            <div className={styles.section}>
                <Button variant={buttonVariant} text={buttonText} />
            </div>

        </div>

    )
}