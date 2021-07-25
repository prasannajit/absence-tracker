import React from 'react';
import { DataGrid, GridToolbar, GridPageChangeParams } from '@material-ui/data-grid';
import Summary from '../Summary';
import { prepareTableData } from '../../helpers';
import { APIResponse } from '../../types';

const Table = ({ data }: { data: Array<APIResponse> }) => {
    const [pageSize, setPageSize] = React.useState<number>(10);
    const handlePageSizeChange = (params: GridPageChangeParams) => {
        setPageSize(params.pageSize);
    };
    const formattedData = prepareTableData(data);
    return (
        <section className="TableWrapper" style={{ height: 700, width: '80%' }}>
            <Summary count={data.length} />
            {data.length ? (<DataGrid
                {...formattedData}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[10, 20, 50]}
                components={{
                    Toolbar: GridToolbar,
                }}
                pagination
            />):null}

        </section>
    )
};

export default Table;