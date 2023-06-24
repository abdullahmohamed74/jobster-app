import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import { clearFilters, handleFiltersChange } from '../store';
import { useState, useMemo, useCallback } from 'react';

function SearchContainer() {
  const [localSearch, setLocalSearch] = useState('');
  const { searchStatus, searchType, sort, sortOptions, isLoading } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      handleFiltersChange({ name: e.target.name, value: e.target.value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  // using debounce
  // only update "searchTerm" state in the store after some time
  // after the last key that the user writes
  // so delay the request until the user writes the whole search word
  const debounce = useCallback(() => {
    let timeout;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        dispatch(
          handleFiltersChange({ name: e.target.name, value: e.target.value })
        );
      }, 1500);
    };
  }, [dispatch]);

  const optimizedDebounce = useMemo(() => debounce(), [debounce]);

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search input */}
          <FormRow
            type="text"
            lableText="search"
            name="searchTerm"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="job status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleChange}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="job type"
            name="searchType"
            value={searchType}
            handleChange={handleChange}
            list={['all', ...jobTypeOptions]}
          />
          {/* search by sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleChange}
            list={sortOptions}
          />

          <button
            className="btn btn-danger btn-block"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }

  h5 {
    font-weight: 700;
  }

  .btn-block {
    align-self: end;
    margin-top: 1.6rem;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    align-items: center;
    row-gap: 0.8rem;
    column-gap: 3.2rem;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .btn-block {
      margin-top: 0;
    }
  }
`;

export default SearchContainer;
