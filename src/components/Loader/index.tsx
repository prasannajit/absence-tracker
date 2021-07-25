import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { StyledSection } from './styled';

/**
 * Loader component to be used when API call is in progress
 * @returns react node
 */
const Loader = () => {
    return (<StyledSection>
        <Skeleton variant="text" width="600px" height="20px"></Skeleton>
        <Skeleton variant="text" width="600px" height="20px"></Skeleton>
        <br />
        <Skeleton variant="rect" width="600px" height="400px" />
    </StyledSection>);
};

export default Loader;