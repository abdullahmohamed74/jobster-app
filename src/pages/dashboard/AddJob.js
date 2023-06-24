import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../utils/DashboardFormWrapper';
import { FormRow, FormRowSelect } from '../../components';
import { handleChange, clearValues, createJob, editJob } from '../../store';
import { useEffect } from 'react';

function AddJob() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    status,
    jobTypeOptions,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return;
    }

    // addJob request
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // call the dispatch, call action creator in it, pass name and value
    // to control the inputs
    dispatch(handleChange({ name, value }));
  };

  // put user location as default value of job location
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, [dispatch, user.location, isEditing]);

  return (
    <Wrapper>
      <h3>{isEditing ? 'edit job' : 'add job'}</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-center">
          {/* position field */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleInputChange}
          />
          {/* company field */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleInputChange}
          />
          {/* job location field */}
          <FormRow
            type="text"
            lableText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleInputChange}
          />
          {/* status field */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleInputChange}
            list={statusOptions}
          />
          {/* job type field */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleInputChange}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              onClick={() => dispatch(clearValues())}
              type="button"
              className="btn btn-block clear-btn"
            >
              clear
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-block submit-btn"
            >
              {isLoading ? 'loading..' : 'submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

export default AddJob;
