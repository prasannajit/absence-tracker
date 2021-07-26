import React from 'react';
import { generateCalendarFile, downloadToFile } from '../../helpers';
import { DownloadCalFile, NoRecords } from '../../locale';
import { CombinedRecord } from '../../types';
import { StyledSection, StyledH1, StyledParagraph, StyledDiv, StyledImg, StyledButton } from './styled';
import noRecords from './no_records.png';

/**
 * Summary component that shows total no of records and provides
 * a button to download ics file
 * @param {count} no of records
 * @returns 
 */
const Summary = ({ data }: { data: Array<CombinedRecord> }) => {
    const handleSubmit = () => {
        const fileData = generateCalendarFile(data);
        if (fileData) {
            downloadToFile(fileData, 'leaves.ics', 'text/plain');
        }
    };
    const getContent = (count: number) => {
        /** No result scenario */
        if (count === 0) {
            return <StyledDiv>
                <StyledImg src={noRecords} height="64" width="64" alt="No records found"></StyledImg>
                <StyledParagraph tabIndex={0}>{NoRecords}</StyledParagraph>
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
                <StyledH1>Absence Tracker</StyledH1>
            </header>
            {getContent(data.length)}
        </StyledSection>
    );
};

export default Summary;
