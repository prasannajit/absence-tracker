import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from './index';
import { MockAPIResponse } from '../../mock';

describe('Summary component test suite', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe('Summary component', () => {
        test('Renders Summary component', async () => {
            render(<Summary data={JSON.parse(MockAPIResponse)} />);
            expect(screen.getByText('Absence Tracker')).toBeInTheDocument();
            expect(screen.getByText('Total absences : 42')).toBeInTheDocument();
        });
        test('Renders Summary component with no records', async () => {
            render(<Summary data={[]} />);
            expect(screen.getByText('No records found. Please add absence records to view data.')).toBeInTheDocument();
        });
    });
});

