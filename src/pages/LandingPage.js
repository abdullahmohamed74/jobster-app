import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import main from '../utils/images/main.svg';
import { Logo } from '../components';

function LandingPage() {
  return (
    <Wrapper>
      <nav className="container">
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    height: calc(100vh - var(--nav-height));
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4.8rem;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;

    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  /* 992px/16 === 62em */
  @media screen and (max-width: 62em) {
    .page {
      grid-template-columns: 1fr;
      column-gap: 0;
    }

    .main-img {
      display: none;
    }
  }
`;

export default LandingPage;
