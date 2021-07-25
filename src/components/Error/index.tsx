import React from 'react';
import error_logo from './error_icon.svg';
import { SomethingWrong, TryAgain, Retry } from '../../locale';
import {
    StyledSection,
    StyledHeader,
    StyledH1,
    StyledImg,
    StyledParagraph,
    StyledButton,
} from './styled';
/**
 * Error component to be used when API call failed
 * @returns 
 */
const Error = () => {
    const handleClick = () => {
        window.history.go(0);
    };
    return (
        <StyledSection>
            <StyledHeader>
                <figure>
                    <StyledImg src={error_logo} width="36px" height="36px" alt="Error" />
                </figure>
                <StyledH1>{SomethingWrong}</StyledH1>
            </StyledHeader>
            <StyledParagraph>{TryAgain}</StyledParagraph>
            <StyledButton onClick={handleClick}>{Retry}</StyledButton>
        </StyledSection>
    )
};

export default Error;