import React from 'react';
import { AnyObject, AbsenceStatus } from "../types";
import { nanoid } from 'nanoid';
import { GridColDef, GridCellParams } from '@material-ui/data-grid';
import { Tooltip } from '@material-ui/core'
import { StyledDiv } from './styled';

/**
 * Returns leave approval status
 * @param rejectedAt  - rejectedAt datetime string
 * @param confirmedAt - confirmedAt datetime string
 * @returns - approval status
 */
const getApprovalStatus = (rejectedAt: string, confirmedAt: string) => {
    let status: AbsenceStatus = AbsenceStatus.REQUESTED;
    /** If  rejectedAt field has value absence request is rejected*/
    if (rejectedAt) {
        status = AbsenceStatus.REJECTED;
    } else if (confirmedAt) {
        /** If  confirmedAt field has value absence request is confirmed*/
        status = AbsenceStatus.CONFIRMED;
    }
    return status;
};

/**
 * Calculates the diff between start and end dates
 * @param start - start date
 * @param end - end date
 * @returns - difference between start and end in days
 */
const diffInDays = (start: string, end: string) => {
    let startDate = new Date(start);
    let endDate = new Date(end);
    return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
};

/**
 * 
 * @param data - combined member and absence records
 * @returns formatted data to be used by material-ui data grid component
 */
const prepareTableData = (data: Array<AnyObject>) => {
    let rows: Array<AnyObject> = [];
    const columns: GridColDef[] = [
        {
            field: 'image',
            description: 'Photo',
            headerName: 'Photo',
            flex: 1,
            filterable: false,
            sortable: false,
            renderCell: (params: GridCellParams) => {
                return (<>
                    <img
                        src={params.value as string}
                        loading="lazy" alt="member"
                        style={{ height: '80px', width: '80px' }}
                    />
                </>)
            }
        },
        { field: 'name', type: 'string', headerName: 'Name', description: 'Name', filterable: false, flex: 1, },
        { field: 'type', type: 'string', headerName: 'Type', description: 'Type', flex: 0.9, },
        {
            field: 'memberNote',
            type: 'string',
            headerName: 'Member Note',
            description: 'Member Note',
            filterable: false,
            flex: 1,
            renderCell: (params: GridCellParams) => {
                return (
                    <Tooltip title={params.value as string}>
                        <StyledDiv>{params.value}</StyledDiv>
                    </Tooltip>
                )
            }
        },
        { field: 'startDate', type: 'date', headerName: 'Start Date', description: 'Start Date', flex: 1, },
        { field: 'endDate', type: 'date', headerName: 'End Date', description: 'End Date', flex: 1, },
        { field: 'period', type: 'number', headerName: 'Period', description: 'Period in days', filterable: false, flex: 0.9, },
        { field: 'status', type: 'string', headerName: 'Status', description: 'Status', filterable: false, flex: 0.9, },
        {
            field: 'admitterNote',
            type: 'string',
            headerName: 'Admitter Note',
            description: 'Admitter Note',
            filterable: false,
            flex: 1,
            renderCell: (params: GridCellParams) => {
                return (
                    <Tooltip title={params.value as string}>
                        <StyledDiv>{params.value}</StyledDiv>
                    </Tooltip>
                )
            }
        },
    ];
    const formattedData = {
        columns,
        rows,
    };
    const rowsData = data.map(row => {
        const { name, image, type, startDate, endDate, memberNote, admitterNote, rejectedAt, confirmedAt } = row;
        const period = diffInDays(startDate,endDate);
        let status = getApprovalStatus(rejectedAt, confirmedAt);
        return {
            id: nanoid(), name, type, startDate, endDate, memberNote,
            admitterNote, period, status, image,
        }
    });
    formattedData.rows = rowsData;
    return formattedData;
};

export default prepareTableData;