import React from 'react';
import './summary.css';

const Summary = ({ count }: { count: number }) => {
    const handleSubmit = () => {
        /** Reload the same page */
        window.history.go(0);
    };

    return (
        <section className="SummarySectionWrapper">
            <header tabIndex={0}>
                <h1>Absence Tracker</h1>
            </header>
            <p className="SummaryDetails" tabIndex={0}>Total absences : {count}</p>
            <button className="PrimaryBtn" onClick={handleSubmit} tabIndex={0}>Reload results</button>
        </section>
    );
};

export default Summary;
