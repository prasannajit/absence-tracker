import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { generateCalFile, downloadToFile } from '../../helpers';
import noRecords from './no_records.png';
import { DownloadCalFile, NoRecords } from '../../locale';
import { StyledSection, StyledParagraph, StyledDiv, StyledImg, StyledButton } from './styled';

/**
 * Summary component that shows total no of records and provides
 * a button to download ics file
 * @param {count} no of records
 * @returns 
 */
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
            return <StyledDiv>
                <StyledImg src={noRecords} height="64" width="64" alt="No records found"></StyledImg>
                <p className="SummaryDetails" tabIndex={0}>{NoRecords}</p>
            </StyledDiv>
        } else {
            return (
                <>
                    <StyledParagraph tabIndex={0}>Total absences : {count}</StyledParagraph>
                    <StyledButton className="PrimaryBtn" onClick={handleSubmit} tabIndex={0}>{DownloadCalFile}</StyledButton>
                </>
            )
        }
    };
    return (
        <StyledSection>
            <header tabIndex={0}>
                <h1>Absence Tracker</h1>
            </header>
            {getContent(count)}
        </StyledSection>
    );
};

export default Summary;
