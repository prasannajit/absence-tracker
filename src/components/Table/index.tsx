import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import Summary from '../Summary';
import { getDataGridProps } from '../../helpers';
import { CombinedRecord } from '../../types';
import {StyledDiv} from './styled';

/**
 * Table component that uses material-ui's datagrid component
 * to display a set of records
 * @param {data} - combined record set of absences and members
 * @returns react node
 */
const Table = ({ data }: { data: Array<CombinedRecord> }) => {
    const [pageSize, setPageSize] = React.useState<number>(10);

    /** Handle records per page change by user */
    const handlePageSizeChange = (pageSize:number) => {
        setPageSize(pageSize);
    };
    /** Format data as per DataGrid component's requirements */
    const formattedData = getDataGridProps(data);
    return (
        <StyledDiv>
            <Summary data={data} />
            {data.length ? (<DataGrid
                {...formattedData!}
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