import React from 'react';
import { DataGrid, GridToolbar, GridPageChangeParams } from '@material-ui/data-grid';
import Summary from '../Summary';
import { prepareTableData } from '../../helpers';
import { AnyObject } from '../../types';
import {StyledDiv} from './styled';

/**
 * Table component that uses material-ui's datagrid component
 * to display a set of records
 * @param {data} - combined record set of absences and members
 * @returns react node
 */
const Table = ({ data }: { data: Array<AnyObject> }) => {
    const [pageSize, setPageSize] = React.useState<number>(10);

    /** Handle records per page change by user */
    const handlePageSizeChange = (params: GridPageChangeParams) => {
        setPageSize(params.pageSize);
    };

    const formattedData = prepareTableData(data);

    return (
        <StyledDiv>
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
            />) : null}
        </StyledDiv>
    )
};

export default Table;