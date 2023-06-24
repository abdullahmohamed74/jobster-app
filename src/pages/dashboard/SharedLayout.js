import { styled } from 'styled-components';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <Wrapper>
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;

  .dashboard-page {
    width: 90%;
    margin: 0 auto;
    padding: 3.2rem 0;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;

    .dashboard-page {
      width: 90vw;
    }
  }
`;

export default SharedLayout;
