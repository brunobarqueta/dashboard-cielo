import { Chart as ChartJS, CategoryScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";
import { fetchTransactions } from "../../slices/transactionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

ChartJS.register(CategoryScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function LineChart() {
	const { transactions, loading } = useSelector((state) => state.transactions);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTransactions());
	}, []);

	const statusCount = useRef({});
	useEffect(() => {
		const newStatusCount = {};
    
		if (!loading && transactions.length > 0) {
			transactions.forEach((item) => {
				const { status } = item;
				if (newStatusCount[status]) {
					newStatusCount[status]++;
				} else {
					newStatusCount[status] = 1;
				}
			});
			statusCount.current = newStatusCount;
		}
	}, [transactions]);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
		},
	};

	const labels = Object.keys(statusCount.current);

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Transactions",
				data: Object.values(statusCount.current),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};

	return (
		<TitleCard title={"Transactions by Status"}>
			<Line data={data} options={options} />
		</TitleCard>
	);
}

export default LineChart;
