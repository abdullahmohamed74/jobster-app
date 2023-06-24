import { styled } from 'styled-components';

function JobInfo({ icon, text }) {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.6rem;
    margin-right: 1.6rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
  .text {
    font-size: 1.6rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
`;

export default JobInfo;
