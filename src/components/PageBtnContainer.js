import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { changePageNum } from '../store';

function PageBtnContainer() {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const nextPage = () => {
    const newPage = page + 1 > numOfPages ? 1 : page + 1;
    dispatch(changePageNum(newPage));
  };

  const prevPage = () => {
    const newPage = page - 1 === 0 ? numOfPages : page - 1;
    dispatch(changePageNum(newPage));
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              key={pageNum}
              onClick={() => dispatch(changePageNum(pageNum))}
              type="button"
              className={pageNum === page ? 'pageBtn active' : 'pageBtn'}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      <button type="button" className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 9.6rem;
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  .btn-container {
    background: var(--primary-100);
    border-radius: var(--borderRadius);
  }

  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 5rem;
    height: 4rem;
    font-weight: 700;
    font-size: 2rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }

  .pageBtn:hover,
  .active {
    background: var(--primary-500);
    color: var(--white);
  }

  .prev-btn,
  .next-btn {
    font-size: 1.6rem;
    width: 10rem;
    height: 4rem;
    background: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
`;

export default PageBtnContainer;
