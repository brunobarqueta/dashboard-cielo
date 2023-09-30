import { Link } from "react-router-dom";
import TitleCard from "../../../components/Cards/TitleCard";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

function LastTransactions() {

    const { transactions, loading } = useSelector((state) => state.transactions);

    const lastFiveTransactions = useRef([]);
    useEffect(() => {
        lastFiveTransactions.current = transactions.slice(-10);
    }, []);

	return (
		<TitleCard title={"Last Transactions"}>
			{/** Table Data */}
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th data-testid="table-header"></th>
							<th data-testid="payment-type-header" className="normal-case">Payment Type</th>
							<th data-testid="card-brand-header" className="normal-case">Card Brand</th>
							<th data-testid="gross-amount-header" className="normal-case">Gross Amount</th>
						</tr>
					</thead>
					<tbody>
						{lastFiveTransactions.current.length > 0 && lastFiveTransactions.current.map((item, k) => {
							return (
								<tr key={k}>
									<th>{k + 1}</th>
									<td data-testid={`payment-type-${k}`}>{item.paymentType}</td>
									<td data-testid={`card-brand-${k}`}>{item.cardBrand}</td>
									<td data-testid={`gross-amount-${k}`}>${item.grossAmount.toFixed(2)}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Link to={"/app/transactions"}>
				<button className="btn btn-neutral flex items-center mx-auto mt-8">See more</button>
			</Link>
		</TitleCard>
	);
}

export default LastTransactions;
