import React from 'react';
import { APIResponse, AbsenceStatus } from "../types";
import { nanoid } from 'nanoid';
import { GridColDef, GridCellParams } from '@material-ui/data-grid';
import './helpers.css';

const prepareTableData = (data: Array<APIResponse>) => {
    let rows: Array<APIResponse> = [];
    const columns: GridColDef[] = [
        {
            field: 'image',
            description: 'Avatar',
            headerName: 'Avatar',
            flex: 1,
            filterable: false,
            sortable: false,
            renderCell: (params: GridCellParams) => {
                return (<>
                    <img
                        src={params.value as string}
                        loading="lazy" alt="avatar"
                        style={{ height: '80px', width: '80px' }}
                    />
                </>)
            }
        },
        { field: 'name', type: 'string', headerName: 'Name', description: 'Name', filterable: false, flex: 1, },
        { field: 'type', type: 'string', headerName: 'Type', description: 'Type', flex: 1, },
        {
            field: 'memberNote',
            type: 'string',
            headerName: 'Member Note',
            description: 'Member Note',
            filterable: false,
            flex: 1,
            renderCell: (params: GridCellParams) => {
                return (<>
                    <div className="showEllipsis" title={params.value as string}>{params.value}</div>
                </>)
            }
        },
        { field: 'startDate', type: 'date', headerName: 'Start Date', description: 'Start Date', flex: 1, },
        { field: 'endDate', type: 'date', headerName: 'End Date', description: 'End Date', flex: 1, },
        { field: 'period', type: 'number', headerName: 'Period', description: 'Period in days', filterable: false, flex: 1, },
        { field: 'status', type: 'string', headerName: 'Status', description: 'Status', filterable: false, flex: 1, },
        {
            field: 'admitterNote',
            type: 'string',
            headerName: 'Admitter Note',
            description: 'Admitter Note',
            filterable: false,
            flex: 1,
            renderCell: (params: GridCellParams) => {
                return (<>
                    <div className="showEllipsis" title={params.value as string}>{params.value}</div>
                </>)
            }
        },
    ];
    const formattedData = {
        columns,
        rows,
    };
    const rowsData = data.map(row => {
        const { name, image, type, startDate, endDate, memberNote, admitterNote, rejectedAt, confirmedAt } = row;
        let start = new Date(startDate);
        let end = new Date(endDate);
        const period = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
        let status: AbsenceStatus = AbsenceStatus.REQUESTED;
        if (rejectedAt) {
            status = AbsenceStatus.REJECTED;
        } else if (confirmedAt) {
            status = AbsenceStatus.CONFIRMED;
        }
        return {
            id: nanoid(),
            name,
            type,
            startDate,
            endDate,
            memberNote,
            admitterNote,
            period,
            status,
            image,
        }
    });
    formattedData.rows = rowsData;
    return formattedData;
};

export default prepareTableData;