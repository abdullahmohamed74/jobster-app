import { styled } from 'styled-components';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useSelector } from 'react-redux';

function BigSidebar() {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

  .sidebar-container {
    background: var(--white);
    min-height: 100vh;
    height: 100%;
    width: 250px;
    /* toggle functionality */
    margin-left: -250px;
    transition: var(--transition);
  }
  .show-sidebar {
    margin-left: 0;
  }

  .content {
    position: sticky;
    top: 0;
  }

  header {
    height: 9.6rem;
    display: flex;
    align-items: center;
    padding-left: 4rem;
  }

  .nav-links {
    padding-top: 3.2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1.6rem 0;
    padding-left: 4rem;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 4.8rem;
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

  @media (max-width: 992px) {
    display: none;
  }
`;

export default BigSidebar;
