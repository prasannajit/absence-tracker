import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { generateCalFile, downloadToFile } from '../../helpers';
import noRecords from './no_records.png';
import './summary.css';

const Summary = ({ count }: { count: number }) => {
    const data = useSelector((state: RootState) => state.APIData.data);
    const handleSubmit = () => {
        const fileData = generateCalFile(data);
        if (fileData) {
            downloadToFile(fileData, 'leaves.ics', 'text/plain');
        }
    };
    const getContent = (count: number) => {
        if (count === 0) {
            return <div className="NoResultsWrapper">
                <img className="NoRecordsImg"src={noRecords} height="64" width="64" alt="No records found"></img>
                <p className="SummaryDetails" tabIndex={0}>No records found. Please add absence records to view data.</p>
            </div>
        } else {
            return (
                <>
                    <p className="SummaryDetails" tabIndex={0}>Total absences : {count}</p>
                    <button className="PrimaryBtn" onClick={handleSubmit} tabIndex={0}>Download cal file</button>
                </>
            )
        }
    };
    return (
        <section className="SummarySectionWrapper">
            <header tabIndex={0}>
                <h1>Absence Tracker</h1>
            </header>
            {getContent(count)}
        </section>
    );
};

export default Summary;
