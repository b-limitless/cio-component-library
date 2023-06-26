import React, { ReactNode } from "react";
import { BasicTable, Button } from "../";
import styles from "./datatable.module.scss";

export interface DataTableInterface {
  tableHeader: string[],
  tableData: any[],
  showFebricModels?: boolean;
  detailsComponents?: ReactNode;
  setShowSelectRowId?: Function;
  showDetailReactNode: ReactNode;
  tableTitle: string;
  showToLeftButton: boolean;
  test?:boolean;
  setShowModel?:Function; 
}

export default function Febric({setShowModel, tableTitle, tableHeader, tableData, setShowSelectRowId, showDetailReactNode, showToLeftButton, test }: DataTableInterface) {
  // Loading the febrics for the  users
  const customStyle = {
    cursor: "pointer"
  }


  const showModelHandler = (i: number) => {
    if (setShowModel === undefined) return;
    return setShowModel(i);
    
  }

  if (typeof setShowSelectRowId === "function") {
    tableData = tableData.map((row: any, i: number) => {
      row.action = <><a style={customStyle} onClick={() => showModelHandler(i)}>{showDetailReactNode}</a>{" "}<a>Edit</a></>;
      return row;
    });
  }


  return (
    <>
      {/* {showFebricDetailsModel !== -1 && <FebricDetails setShowFebricDetailsModel = {setShowFebricDetailsModel} showFebricDetailsModel={showFebricDetailsModel}/>}
     */}
      <div className={styles.febric__wrapper}>
        <div className={styles.febric__container}>
          <div className={styles.row}>
            <div className={styles.title}>{tableTitle}</div>
            {showToLeftButton && <div className={styles.add__new}>
              <a href="/product/febric/add"><Button variant="primary" text="Add Febric" /></a>
            </div>}
          </div>

          <div className={styles.row}>
            <div className={styles.table__container}>
              <div className={styles.filters}>
                <div>Filter Will be shown - will iterate through the setting</div>
              </div>
              <div className={styles.table}>
                <BasicTable tableHeader={tableHeader} tableData={tableData} tableRow={tableData[0]} showTableHead />
              </div>
              <div className={styles.pagination}>
                <div>Pagination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}