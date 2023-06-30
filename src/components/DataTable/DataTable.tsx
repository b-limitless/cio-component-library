import React, { ReactNode, useState } from "react";
import { BasicTable, Button, MultipleSelectWithCheckBox } from "../";
import styles from "./datatable.module.scss";
import { SelectChangeEvent } from '@mui/material/Select';
import PaginationControlled from "../Pagination/Pagination";


const filterData = [
  {
    label: "Order Status",
    data: ["Hari", "Hurican", "Nighmare", "Skull"],
    id: "orderStatus"
  },
  {
    label: "Payment Status",
    data: ["male", "female"],
    id: "genders"
  },
];

export type keyStrinValue  = {
  [x:string]: any
}

export interface DataTableInterface {
  tableHeader: string[],
  tableData: any[],
  showFebricModels?: boolean;
  detailsComponents?: ReactNode;
  setShowSelectRowId?: Function;
  showDetailReactNode: ReactNode;
  tableTitle: string;
  showToLeftButton: null | keyStrinValue;
  setShowModel?: Function;
  filters?: any;
  setFilters?: Function;
  filterData: any;

  paginate: boolean,
  page: number;
  setPage: Function;
  count: number;

}

export default function DataTable({

  //  Pagination
  paginate,
  page,
  setPage,
  count,
  // Filter
  filterData,
  filters,
  setFilters,
  //  Models 
  setShowModel,
  tableTitle,
  tableHeader,
  tableData,
  setShowSelectRowId,
  showDetailReactNode,
  showToLeftButton }: DataTableInterface) {

  // const [filters, setFilters] = React.useState<any>({ orderStatus: [], genders: [] });

  const handleChange = (event: SelectChangeEvent<typeof filters>, name: string) => {

    if (!setFilters) return;

    const {
      target: { value },
    } = event;

    setFilters(
      { ...filters, [name]: typeof value === 'string' ? value.split(',') : value }

    );
  };

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
              <a href={showToLeftButton?.url}><Button variant="primary" text={showToLeftButton.label} /></a>
            </div>}
          </div>

          <div className={styles.row}>
            <div className={styles.table__container}>
              <div className={styles.filters}>
                {filterData && filterData.map((item: any, i: number) => <MultipleSelectWithCheckBox
                  key={`filter-item-${i}`}
                  handleChange={(e: any) => handleChange(e, item.id)}
                  data={item.data}
                  label={item.label}
                  value={filters[item.id]}
                  id={filters.id}
                />)}
              </div>
              <div className={styles.table}>
                <BasicTable tableHeader={tableHeader} tableData={tableData} tableRow={tableData[0]} showTableHead />
              </div>
              <div className={styles.pagination}>
                {paginate && <PaginationControlled
                  count={count}
                  page={page}
                  setPage={setPage}
                />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}