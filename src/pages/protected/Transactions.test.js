import { render, screen } from '@testing-library/react';
import Transactions from './Transactions';
import { Provider } from 'react-redux'; // Assuming you are using Redux
import configureStore from 'redux-mock-store'; // For creating a mock Redux store

const mockStore = configureStore([]);

const mockTransactions = [];

test('renders transactions correctly', () => {
  const store = mockStore({
    transactions: {
      transactions: mockTransactions,
      loading: false,
    },
  });

  render(
    <Provider store={store}>
      <Transactions />
    </Provider>
  );

  mockTransactions.forEach((transaction) => {
    const merchantId = screen.getByText(transaction.merchantId);
    const paymentType = screen.getByText(transaction.paymentType);
    const cardBrand = screen.getByText(transaction.cardBrand);
    const grossAmount = screen.getByText(`$${transaction.grossAmount}`);
    const date = screen.getByText(moment(transaction.date).format('DD/MM/YYYY'));
    const status = screen.getByText(transaction.status);

    expect(merchantId).toBeInTheDocument();
    expect(paymentType).toBeInTheDocument();
    expect(cardBrand).toBeInTheDocument();
    expect(grossAmount).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});