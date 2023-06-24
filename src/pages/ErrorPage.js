import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../utils/images/not-found.svg';

function ErrorPage() {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90vh;
    max-width: 60rem;
    display: block;
    margin-bottom: 3.2rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0 0 1rem 0;
    color: var(--grey-500);
  }

  a {
    text-decoration: underline;
    color: var(--primary-500);
    text-transform: capitalize;
    font-size: 1.6rem;
  }
`;

export default ErrorPage;
