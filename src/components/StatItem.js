import { styled } from 'styled-components';

function StatItem({ title, count, icon, color, bcg }) {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 3.2rem;
  border-radius: var(--borderRadius);
  background: var(--white);
  border-bottom: 5px solid ${(props) => props.color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    /* display: block; */
    font-weight: 700;
    font-size: 5rem;
    color: ${(props) => props.color};
  }

  .icon {
    width: 7rem;
    height: 6rem;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 3.2rem;
      color: ${(props) => props.color};
    }
  }

  .title {
    margin: 0.8rem 0 0 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
  }
`;

export default StatItem;
