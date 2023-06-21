import React from 'react';
import  Button  from "../Button";
import styles from './message.module.scss';

import { variantType } from '../Button/Button';

interface SucessMessageInterface {
    title: string;
    buttonText: string;
    buttonVariant:variantType;
    icon:string;
}


export default function Message({title, buttonText, buttonVariant, icon }: SucessMessageInterface) {
    return (
        <div className={styles.base}>
            <div className={styles.order__completed}>
                <img src={icon} width={82} height={82} alt={title} />
                <div className={styles.bold__message}>{title}</div>
                {/* <div className={styles.confirmation}> You will be receiving confirmation email</div> */}
                <a href="/product/febric">
                    <Button text={buttonText} variant={buttonVariant}/>
                </a>
            </div>

        </div>
    )
}