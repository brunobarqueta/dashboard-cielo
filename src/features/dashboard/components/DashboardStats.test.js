import { render, screen } from '@testing-library/react';
import DashboardStats from './DashboardStats';

test('renders DashboardStats component correctly', () => {
  const props = {
    title: 'Total Quantity',
    icon: 'icon-component', // Mock icon component
    value: '100',
    colorIndex: 0,
  };

  render(<DashboardStats {...props} />);

  const statElement = screen.getByTestId('dashboard-stat');
  const titleElement = screen.getByTestId('dashboard-stat-title');
  const valueElement = screen.getByTestId('dashboard-stat-value');

  expect(statElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();

  // You can also validate specific text content if needed
  expect(titleElement).toHaveTextContent('Total Quantity');
  expect(valueElement).toHaveTextContent('100');
});

// Additional tests for different props and edge cases can be added as needed.
