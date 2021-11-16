"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var s = require("./paginator.module.scss");
var Paginator = function (props) {
    /*et {totalProjectsCount, pageSize, currentPage} = props;
    const portionSize = 6;

    let pageCount = Math.ceil(totalProjectsCount / pageSize);

    let pages = [];
*/ /*    for(let i = 1; i<= pageCount; i++) {
            pages.push(i);
        }*/ /*


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
    var totalProjectsCount = props.totalProjectsCount, pageSize = props.pageSize, currentPage = props.currentPage, onPageChanged = props.onPageChanged;
    var pageCount = Math.ceil(totalProjectsCount / pageSize);
    var pages = [];
    for (var i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (React.createElement("div", { className: s.page + " " + s.page__container }, pages.map(function (page, index) { return React.createElement("span", { key: index, className: currentPage == page ? s.page__selected : s.page__item, onClick: function () { return onPageChanged(page); } }, page); })));
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
};
exports.default = Paginator;
//# sourceMappingURL=Paginator.js.map