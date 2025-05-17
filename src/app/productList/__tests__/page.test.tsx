import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../page';

// Mock the product card components
jest.mock('@/globalComponents/cards/GridProductCard', () => {
  return function MockGridProductCard(props: any) {
    return <div data-testid="grid-product-card">{props.productName}</div>;
  };
});

jest.mock('@/globalComponents/cards/ListProductCard', () => {
  return function MockListProductCard(props: any) {
    return <div data-testid="list-product-card">{props.productName}</div>;
  };
});

// Mock the products data
jest.mock('@/data/mockProducts', () => ({
  products: [
    {
      id: 1,
      title: 'Test Product 1',
      price: 100,
      images: ['test-image-1.jpg'],
      description: 'Test description 1'
    },
    {
      id: 2,
      title: 'Test Product 2',
      price: 200,
      images: ['test-image-2.jpg'],
      description: 'Test description 2'
    }
  ]
}));

describe('ProductList', () => {
  it('renders grid view by default', () => {
    render(<ProductList />);
    
    // Check if grid view is active
    expect(screen.getByText('Grid View')).toHaveClass('btn-gradient');
    expect(screen.getByText('List View')).not.toHaveClass('btn-gradient');
    
    // Check if grid products are rendered
    const gridCards = screen.getAllByTestId('grid-product-card');
    expect(gridCards).toHaveLength(2);
  });

  it('switches to list view when list view button is clicked', () => {
    render(<ProductList />);
    
    // Click list view button
    fireEvent.click(screen.getByText('List View'));
    
    // Check if list view is active
    expect(screen.getByText('List View')).toHaveClass('btn-gradient');
    expect(screen.getByText('Grid View')).not.toHaveClass('btn-gradient');
    
    // Check if list products are rendered
    const listCards = screen.getAllByTestId('list-product-card');
    expect(listCards).toHaveLength(2);
  });

  it('switches back to grid view when grid view button is clicked', () => {
    render(<ProductList />);
    
    // First switch to list view
    fireEvent.click(screen.getByText('List View'));
    
    // Then switch back to grid view
    fireEvent.click(screen.getByText('Grid View'));
    
    // Check if grid view is active
    expect(screen.getByText('Grid View')).toHaveClass('btn-gradient');
    expect(screen.getByText('List View')).not.toHaveClass('btn-gradient');
    
    // Check if grid products are rendered
    const gridCards = screen.getAllByTestId('grid-product-card');
    expect(gridCards).toHaveLength(2);
  });

  it('renders correct product information in both views', () => {
    render(<ProductList />);
    
    // Check grid view products
    const gridCards = screen.getAllByTestId('grid-product-card');
    expect(gridCards[0]).toHaveTextContent('Test Product 1');
    expect(gridCards[1]).toHaveTextContent('Test Product 2');
    
    // Switch to list view
    fireEvent.click(screen.getByText('List View'));
    
    // Check list view products
    const listCards = screen.getAllByTestId('list-product-card');
    expect(listCards[0]).toHaveTextContent('Test Product 1');
    expect(listCards[1]).toHaveTextContent('Test Product 2');
  });
}); 