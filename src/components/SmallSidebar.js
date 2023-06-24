import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { toggleSidebar } from '../store';
import NavLinks from './NavLinks';

function SmallSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" onClick={toggle} className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    /* toggle functionality */
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }

  .nav-links {
    padding-top: 3.2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    font-size: 1.6rem;
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    color: var(--grey-900);
  }

  .nav-link:hover .icon {
    color: var(--primary-500);
  }

  .icon {
    font-size: 2.4rem;
    margin-right: 1.6rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }

  .active {
    color: var(--grey-900);
  }

  .active .icon {
    color: var(--primary-500);
  }
`;

export default SmallSidebar;
