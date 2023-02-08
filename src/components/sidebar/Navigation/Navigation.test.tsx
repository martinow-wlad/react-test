import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('should render Navigation', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  
    const link = screen.getAllByTestId("nav-link");
  
    expect(link.length).toBe(3);
  });
})


