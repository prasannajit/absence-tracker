import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { StyledSection, StyledDiv } from './styled';

/**
 * Loader component to be used when API call is in progress
 * @returns react node
 */
const Loader = () => {
    return (<StyledSection data-testid="at-loader-section">
        <StyledDiv>
            <Skeleton variant="text" width="400px" height="20px"></Skeleton>
            <Skeleton variant="text" width="400px" height="20px"></Skeleton>
            <Skeleton variant="circle" width="60px" height="20px" />
        </StyledDiv>
        <Skeleton variant="rect" width="800px" height="600px" />
    </StyledSection>);
};

export default Loader;