import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LastTransactions from "./LastTransactions";

const mockStore = configureStore([]);

test('renders LastTransactions component with headers correctly', async () => {
    const mockTransactions = [
        {
            paymentType: 'Credit Card',
            cardBrand: 'Visa',
            grossAmount: 50.00,
        },
    ];

    const store = mockStore({
        transactions: {
            transactions: mockTransactions,
            loading: false,
        },
    });

    render(
        <Provider store={store}>
            <MemoryRouter>
                <LastTransactions />
            </MemoryRouter>
        </Provider>
    );

    await waitFor(() => {
        const paymentTypeHeader = screen.getByTestId('payment-type-header');
        const cardBrandHeader = screen.getByTestId('card-brand-header');
        const grossAmountHeader = screen.getByTestId('gross-amount-header');

        expect(paymentTypeHeader).toBeInTheDocument();
        expect(cardBrandHeader).toBeInTheDocument();
        expect(grossAmountHeader).toBeInTheDocument();
    });
});
