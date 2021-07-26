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
    });
});

