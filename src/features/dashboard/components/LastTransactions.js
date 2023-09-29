import { Link } from "react-router-dom";
import TitleCard from "../../../components/Cards/TitleCard";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

function UserChannels() {

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
							<th></th>
							<th className="normal-case">Payment Type</th>
							<th className="normal-case">Card Brand</th>
							<th className="normal-case">Gross Amount</th>
						</tr>
					</thead>
					<tbody>
						{lastFiveTransactions.current.length > 0 && lastFiveTransactions.current.map((item, k) => {
							return (
								<tr key={k}>
									<th>{k + 1}</th>
									<td>{item.paymentType}</td>
									<td>{item.cardBrand}</td>
									<td>${item.grossAmount.toFixed(2)}</td>
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

export default UserChannels;
