import React, { useMemo } from 'react';
import { useFetch } from './hooks';
import Loader from './components/Loader';
import Error from './components/Error';
import Table from './components/Table';

const API_URL_ABSENCES = 'http://localhost:8081/absences';
const API_URL_MEMBERS = 'http://localhost:8081/members';

function App() {
  const urls = useMemo(() => [API_URL_ABSENCES, API_URL_MEMBERS],[]);
  const { loading, data, error } = useFetch(urls);
  const getElement = (): JSX.Element => {
    if (loading) {
      return <Loader />
    } else if (error) {
      return <Error />
    } else {
      return <Table data={data} />
    }
  }
  return (
    <div>
      {getElement()}
    </div>
  );
}

export default App;
