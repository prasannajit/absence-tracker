import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchDataActionCreator from './store/fetchDataActionCreator';
import { RootState } from './store';
import Loader from './components/Loader';
import Error from './components/Error';
import Table from './components/Table';
import { APITriggerStatus, APIUrl } from './types';
import config from './config';
import { StyledMain } from './styled';

/**
 * React component for entire single page application
 */
const App = () => {
  /** Always returns the same array of tuples on re-renders */
  const urls = useMemo(() => {
    const API_URL_ABSENCES: APIUrl = ['absences', config.API_URL_ABSENCES];
    const API_URL_MEMBERS: APIUrl = ['members', config.API_URL_MEMBERS];
    return [API_URL_ABSENCES, API_URL_MEMBERS]
  }, []);

  /** Select portions of state required by App component */
  const status = useSelector((state: RootState) => state.APIStatus.status);
  const data = useSelector((state: RootState) => state.APIData.data);

  /** Dispatch function to trigger an action */
  const dispatch = useDispatch();

  useEffect(() => {
    /** Trigger an api call to fetch required data */
    dispatch(fetchDataActionCreator(urls));
  }, [urls, dispatch]);

  /**
   * Returns react node based on API status
   * @param status 
   * @returns React node or null
   */
  const getElement = (status: APITriggerStatus): JSX.Element | null => {
    switch (status) {
      case APITriggerStatus.PENDING:
        return <Loader />;
      case APITriggerStatus.FAILED:
        return <Error />;
      case APITriggerStatus.SUCCESS:
        return <Table data={data} />;
      default:
        return null;
    }
  }

  return (
    <StyledMain>
      {getElement(status)}
    </StyledMain>
  );
}

export default App;
