import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Job from './Job';
import Loading from './Loading';
import { getAllJobs } from '../store';
import PageBtnContainer from './PageBtnContainer';

function JobsContainer() {
  const {
    jobs,
    isLoading,
    totalJobs,
    numOfPages,
    searchTerm,
    searchStatus,
    searchType,
    sort,
    page,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  // getAllJobs when the component first render
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch, searchTerm, searchStatus, searchType, sort, page]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 6.4rem;

  h2 {
    text-transform: none;
  }

  & > h5 {
    font-weight: 700;
  }

  .jobs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
  }

  @media (max-width: 992px) {
    .jobs {
      grid-template-columns: 1fr;
      row-gap: 3.2rem;
    }
  }
`;

export default JobsContainer;
