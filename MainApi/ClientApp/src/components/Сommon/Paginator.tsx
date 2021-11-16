import * as React from 'react';

const s = require("./paginator.module.scss");

interface PaginatorStateProps {
    totalProjectsCount: number;
    pageSize: number;
    currentPage: number;
}

interface PaginatorDispatchProps {
    onPageChanged: (p: number) => void;
}


const Paginator: React.FC<PaginatorStateProps & PaginatorDispatchProps> = (props) => {
    /*et {totalProjectsCount, pageSize, currentPage} = props;
    const portionSize = 6;

    let pageCount = Math.ceil(totalProjectsCount / pageSize);

    let pages = [];
*//*    for(let i = 1; i<= pageCount; i++) {
        pages.push(i);
    }*//*


    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const [projects, setProjects] = useState([]);

    const indexOfLastPost = currentPage * portionSize;
    const indexOfFirstPost = indexOfLastPost - portionSize;
    const currentPost = projects.slice(indexOfFirstPost, indexOfLastPost);

    for (let i = 1; i <= Math.ceil(totalProjectsCount / portionSize); i++) {
        pages.push(i);
    }*/

    const { totalProjectsCount, pageSize, currentPage, onPageChanged } = props;

    let pageCount = Math.ceil(totalProjectsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }


    return (
        <div className={`${s.page} ${s.page__container}`}>
            {
                pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? s.page__selected : s.page__item}
                    onClick={() => onPageChanged(page) }>{page}</span>)
            }
        </div>
    );

   /* return (
        <div className={`${s.page} ${s.page__container}`}>
            {
                portionCount > 1 &&
                <button className={s.page__btn} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }

            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={
                            currentPage === p && s.page__selected}
                            onClick={() => { props.onPageChanged(p) }} key={p}>{p}</span>
                    })
            }
            {
                portionCount > portionNumber &&
                <button className={s.page__btn} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>
    );*/
}
export default Paginator;