import { Chart as ChartJS, Filler, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function DoughnutChart() {
	const { transactions, loading } = useSelector((state) => state.transactions);

	const cardBrandCounts = useRef({});
	useEffect(() => {
		const newCardBrandCounts = {};
    
		if (!loading && transactions.length > 0) {
			transactions.forEach((item) => {
				const { cardBrand } = item;
				if (newCardBrandCounts[cardBrand]) {
					newCardBrandCounts[cardBrand]++;
				} else {
					newCardBrandCounts[cardBrand] = 1;
				}
			});
			cardBrandCounts.current = newCardBrandCounts;
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

	const data = {
		labels: Object.keys(cardBrandCounts.current),
		datasets: [
			{
				label: "# of Orders",
				data: Object.values(cardBrandCounts.current),
				backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
				borderWidth: 1,
			},
		],
	};

	return (
		<TitleCard title={"Orders by Card Brand"}>
			<Doughnut options={options} data={data} />
		</TitleCard>
	);
}

export default DoughnutChart;
