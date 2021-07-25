import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { generateCalFile, downloadToFile } from '../../helpers';

import './summary.css';

const Summary = ({ count }: { count: number }) => {
    const data = useSelector((state: RootState) => state.APIData.data);
    const handleSubmit = () => {
        const fileData = generateCalFile(data);
        console.log(fileData);
        if(fileData){
            downloadToFile(fileData,'leaves.ics','text/plain');
        }
    };

    return (
        <section className="SummarySectionWrapper">
            <header tabIndex={0}>
                <h1>Absence Tracker</h1>
            </header>
            <p className="SummaryDetails" tabIndex={0}>Total absences : {count}</p>
            <button className="PrimaryBtn" onClick={handleSubmit} tabIndex={0}>Download iCal</button>
        </section>
    );
};

export default Summary;
