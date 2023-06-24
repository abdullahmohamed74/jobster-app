import { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { clearStore, toggleSidebar } from '../store';

function Navbar() {
  const [showLogout, setShowLogout] = useState(false);

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="logout-btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore('logging out...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: var(--white);
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .nav-center {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toggle-btn {
    font-size: 2.8rem;
    color: var(--primary-500);
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    display: none;
  }

  h3 {
    margin: 0;
  }

  .logout-btn-container {
    position: relative;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    border-radius: var(--borderRadius);
    /* toggle functionality */
    visibility: hidden;
  }
  .show-dropdown {
    visibility: visible;
  }

  .dropdown-btn {
    font-size: 1.6rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }

  @media (max-width: 992px) {
    .nav-center {
      width: 90vw;
    }

    .logo {
      display: flex;
      align-items: center;
      width: 150px;
    }

    .logo-text {
      display: none;
    }
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
  }
`;

export default Navbar;
