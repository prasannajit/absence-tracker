import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, act } from '@testing-library/react';
import App from './App';
import store from './store';
import { MockAPIResponse } from './mock';

describe('App component test suite', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('Renders APP component', () => {
    test('Renders Loader component', async () => {
      const data = JSON.parse(MockAPIResponse);
      const promise = Promise.resolve(data);
      window.fetch = jest.fn(() => {
        return Promise.resolve({
          ok: false,
          json: () => promise,
        });
      });
      render(<Provider store={store}><App /></Provider>);
      expect(screen.getByTestId('at-loader-section')).toBeInTheDocument();
      await act(() => promise);
    });

    test('Renders Error component when response ok property is false', async () => {
      const data = JSON.parse(MockAPIResponse);
      const promise = Promise.resolve(data);
      window.fetch = jest.fn(() => {
        return Promise.resolve({
          ok: false,
          json: () => promise,
        });
      });
      render(<Provider store={store}><App /></Provider>);
      await act(() => promise);
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    test('Renders Error component when fetch returns a promise that is rejected', async () => {
      const promise = Promise.reject({ message: 'Error' });
      window.fetch = jest.fn(() => {
        return Promise.resolve(promise);
      });
      render(<Provider store={store}><App /></Provider>);
      try {
        await act(() => promise);
      }
      catch (e) {
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      }
    });

    test('Renders Table component when api call is successful', async () => {
      const data = JSON.parse(MockAPIResponse);
      const promise = Promise.resolve(data);
      window.fetch = jest.fn(() => {
        return Promise.resolve({
          ok: true,
          json: () => promise,
        });
      });
      render(<Provider store={store}><App /></Provider>);
      await act(() => promise);
      expect(screen.getByText('Absence Tracker')).toBeInTheDocument();
    });
  });
});

