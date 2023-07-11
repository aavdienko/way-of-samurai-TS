import { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

type PagiantorPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onClickHandler: (pageNumber: number) => void;
  portionSize: number
};

export const Paginator = (props: PagiantorPropsType) => {
  const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionsCount = Math.ceil(pagesCount / props.portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
  const rightPortioPageNumber = portionNumber * props.portionSize

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (<button onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>) }

      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortioPageNumber)
        .map((page, index) => {
          return (
            <span
              key={index}
              className={cn(styles.pageNumber, {
                [styles.selectedPage]: props.currentPage === page,
              })}
              onClick={() => props.onClickHandler(page)}
            >
              {page}
            </span>
          );
        })}
        {portionNumber <  portionsCount && (<button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>)}             
    </div>
  );
};
