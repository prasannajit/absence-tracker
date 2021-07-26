import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './index';

describe('Error component test suite', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    
    describe('Error component', () => {
      test('Renders Error component successfully', async () => {
        render(<Error />);
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByText('Please retry by clicking the button below')).toBeInTheDocument();
      });
    });
  });
  
  