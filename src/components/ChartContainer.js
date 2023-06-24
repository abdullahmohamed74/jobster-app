import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import BarChart from './BarChart';
import AreaChart from './AreaChart';

function ChartContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 6.4rem;
  text-align: center;

  h4 {
    text-align: center;
    margin-bottom: 1.2rem;
  }

  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default ChartContainer;
