import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader component test suite', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    
    describe('Loader component', () => {
      test('Renders Loader component successfully', async () => {
        render(<Loader />);
        expect(screen.getByTestId('at-loader-section')).toBeInTheDocument();
      });
    });
  });
  
  