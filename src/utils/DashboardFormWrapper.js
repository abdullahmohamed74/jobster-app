import { styled } from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 4.8rem 3.2rem 6.4rem;
  box-shadow: var(--shadow-2);

  .form {
    width: 100%;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }

  .form-row {
    margin-bottom: 0;
  }

  .form-center {
    display: grid;
    align-items: center;
    row-gap: 0.8rem;
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1.6rem;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: end;
    column-gap: 1.6rem;
    margin-top: 0.8rem;
  }

  .clear-btn {
    background: var(--grey-500);
  }

  .clear-btn:hover {
    background: var(--black);
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1.6rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }

  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: repeat(3, 1fr);
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
