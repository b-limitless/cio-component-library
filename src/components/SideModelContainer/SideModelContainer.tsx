
import React from 'react';
import styles from "./side-model-container.module.scss";
import { svgCDNAssets } from '../../config/assets';


export interface SideModeInterface {
  children: React.ReactNode;
  showModel: boolean | number | string;
  setShowModel: Function;
  

}

export default function SideModel({ children, showModel, setShowModel }: SideModeInterface) {
  return (
    <div className={`${styles.model} ${showModel ? styles.show : styles.hide}`}>
      <div className={styles.model__side}>
        <div className={styles.close}>
            <img src={svgCDNAssets.crossIcon} alt=""  onClick={() => setShowModel(false)}/>
        </div>
        {children}
      </div>
    </div>
  )
}