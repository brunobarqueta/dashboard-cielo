import DashboardStats from "./components/DashboardStats";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import LastTransactions from "./components/LastTransactions";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchSummary } from "../slices/summarySlice";
import { fetchTransactions } from "../slices/transactionsSlice";

function Dashboard() {
	const { summary, loading } = useSelector((state) => state.summary);

	const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTransactions());
        dispatch(fetchSummary());
    }, []);


	const statsData = useRef([]);
	useEffect(() => {
		if (!loading && summary.totalQuantity !== undefined) {
			statsData.current = [
				{ title: "Total Quantity", value: summary.totalQuantity, icon: <CreditCardIcon className="w-8 h-8" /> },
				{ title: "Total Amount", value: `$ ${summary.totalAmount.toFixed(2)}`, icon: <CircleStackIcon className="w-8 h-8" /> },
				{ title: "Net Amount", value: `$ ${summary.totalNetAmount}`, icon: <CircleStackIcon className="w-8 h-8" /> },
				{ title: "Average Amount", value: `$ ${summary.totalAverageAmount}`, icon: <CircleStackIcon className="w-8 h-8" /> },
			];
		}
	}, [summary]);

	return (
		<>
			{!loading && (
                <>
                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                        {statsData.current.map((d, k) => {
                            return <DashboardStats key={k} {...d} colorIndex={k} />;
                        })}
                    </div>
                    <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                        <LineChart />
                        <BarChart />
                    </div>
                    <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                        <LastTransactions />
                        <DoughnutChart />
                    </div>
                </>
            )}
		</>
	);
}

export default Dashboard;
