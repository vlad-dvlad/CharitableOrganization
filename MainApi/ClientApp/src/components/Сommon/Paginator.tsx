import * as React from 'react';
import {useState} from "react";

const s = require("./paginator.module.scss");

interface PaginatorStateProps {
    totalProjectsCount: number;
    pageSize: number;
    currentPage: number;
}

interface PaginatorDispatchProps {
    setPage: (p: number) => void;
}


const Paginator: React.FC<PaginatorStateProps & PaginatorDispatchProps> = (props) => {
    let {totalProjectsCount, pageSize, currentPage} = props;
    const portionSize = 6;

    let pageCount = Math.ceil(totalProjectsCount)

    let pages = [];
    for(let i = 1; i<= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={`${s.page} ${s.page__container}`}>
            {
                portionCount > 1 &&
                    <button className={s.page_btn} onClick={() => setPortionNumber(portionNumber-1)}>Попередні</button>
            }

            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={
                            currentPage === p && s.page__selected}
                            onClick={() => {props.setPage(p)}} key={p}>{p}</span>
                    })
            }
        </div>
    );
};

export default Paginator;