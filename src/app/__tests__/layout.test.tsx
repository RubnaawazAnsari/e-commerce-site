import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

// Mock the next/font/google module
jest.mock('next/font/google', () => ({
  Geist: () => ({
    variable: 'mock-geist-sans',
    subsets: ['latin'],
  }),
  Geist_Mono: () => ({
    variable: 'mock-geist-mono',
    subsets: ['latin'],
  }),
}));

// Mock the Navbar component
jest.mock('@/globalComponents/navbar/Navbar', () => {
  return function MockNavbar() {
    return <div data-testid="mock-navbar">Mock Navbar</div>;
  };
});

// Mock the Toaster component
jest.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid="mock-toaster">Mock Toaster</div>,
}));

describe('RootLayout', () => {
  it('renders the layout with all required components', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // Check if the layout renders with correct HTML structure
    expect(document.documentElement).toHaveAttribute('lang', 'en');
    
    // Check if the body has the correct font classes
    const body = document.body;
    expect(body.className).toContain('mock-geist-sans');
    expect(body.className).toContain('mock-geist-mono');

    // Check if all components are rendered
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-toaster')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children content correctly', () => {
    const testContent = 'Custom Child Content';
    render(
      <RootLayout>
        <div>{testContent}</div>
      </RootLayout>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
}); 