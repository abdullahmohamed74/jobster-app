import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../../store';
import { ChartContainer, StatsContainer, Loading } from '../../components';

function Stats() {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
}
export default Stats;
