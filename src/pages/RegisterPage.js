import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { toast } from 'react-toastify';
import { FormRow, Logo } from '../components';
import { userLogin, userRegister } from '../store';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  // state to control form inputs
  // isMember state to determine whether the user need to register or can login directly
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
  });
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleIsMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error('please fill out all fields');
      return;
    }

    // the user already exists so LOGIN
    if (isMember) {
      dispatch(userLogin({ email, password }));
      return;
    }
    // the user does NOT exist so REGISTER
    dispatch(userRegister({ name, email, password }));
  };

  // if user exists, programmatically navigate to DashboardPage
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? 'loading..' : 'submit'}
        </button>
        <button
          type="button"
          className="btn btn-block btn-hipster"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              userLogin({
                email: 'testUser@test.com',
                password: 'secret',
              })
            )
          }
        >
          {isLoading ? 'loading..' : 'demo app'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button onClick={toggleIsMember} type="button" className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2.2rem;
  }

  h3 {
    text-align: center;
  }

  .form {
    max-width: 40rem;
    border-top: solid 5px var(--primary-500);
  }

  .btn {
    margin-top: 1.6rem;
  }

  p {
    margin: 0;
    margin-top: 1.6rem;
    text-align: center;
  }

  .member-btn {
    background: transparent;
    border: none;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default RegisterPage;
