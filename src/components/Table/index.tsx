import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { prepareTableData } from '../../helpers';
import { APIResponse } from '../../types';

const Table = ({ data }: { data: Array<APIResponse> }) => {
    const formattedData = prepareTableData(data);
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...formattedData} />
        </div>
    )
};

export default Table;