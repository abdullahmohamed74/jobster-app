import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import { deleteJob, setEditJob } from '../store';

function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <Link
            to="/add-job"
            onClick={() =>
              dispatch(
                setEditJob({
                  editJobId: _id,
                  position,
                  company,
                  jobLocation,
                  jobType,
                  status,
                })
              )
            }
            className="btn edit-btn"
          >
            edit
          </Link>
          <button
            type="button"
            onClick={() => dispatch(deleteJob(_id))}
            className="btn delete-btn"
          >
            delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }

  header,
  .content {
    padding: 1.6rem 2.4rem;
  }

  .main-icon {
    width: 6rem;
    height: 6rem;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 3.2rem;
  }

  .info {
    h5 {
      margin-bottom: 0.4rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }

  .pending {
    background: #fcefc7;
    color: #e9b949;
  }

  .interview {
    background: #e0e8f9;
    color: #647acb;
  }

  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }

  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.8rem;

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 10rem;
    height: 3rem;
    margin-top: 0.8rem;
  }

  footer {
    margin-top: 1.6rem;
  }

  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 3rem;
  }

  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.8rem;
  }

  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }

  &:hover .actions {
    visibility: visible;
  }
`;

export default Job;
