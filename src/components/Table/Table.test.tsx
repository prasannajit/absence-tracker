import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './index';
import { MockAPIResponse } from '../../mock';

describe('Table component test suite', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    describe('Table component', () => {
        test('Renders Table component', async () => {
            render(<Table data={JSON.parse(MockAPIResponse)} />);
            expect(screen.getByText('Absence Tracker')).toBeInTheDocument();
            expect(screen.getByText('Total absences : 42')).toBeInTheDocument();
        });
    });
});

