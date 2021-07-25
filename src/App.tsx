import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataAction } from './store/fetchDataAction';
import { RootState } from './store';
import Loader from './components/Loader';
import Error from './components/Error';
import Table from './components/Table';
import { APITriggerStatus, APIUrl } from './types';

const API_URL_ABSENCES: APIUrl = ['absences', 'http://localhost:8081/absences'];
const API_URL_MEMBERS: APIUrl = ['members', 'http://localhost:8081/members'];

function App() {
  const urls = useMemo(() => [API_URL_ABSENCES, API_URL_MEMBERS], []);
  const status = useSelector((state: RootState) => state.APIStatus.status);
  const data = useSelector((state: RootState) => state.APIData.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction(urls));
  }, [urls, dispatch]);

  const getElement = (status: APITriggerStatus): JSX.Element|null => {
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
    <div>
      {getElement(status)}
    </div>
  );
}

export default App;
