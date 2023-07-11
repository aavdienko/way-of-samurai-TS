import styles from './Paginator.module.css';


type PagiantorPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickHandler: (pageNumber: number) => void;
};

export const Paginator = (props: PagiantorPropsType) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            className={props.currentPage === page ? styles.selectedPage : ''}
            onClick={() => props.onClickHandler(page)}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
