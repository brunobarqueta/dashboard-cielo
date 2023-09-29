import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import TitleCard from "../../../components/Cards/TitleCard";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {

	const { transactions } = useSelector((state) => state.transactions);

	const channelCount = useRef({});
	useEffect(() => {
		const newChannelCount = {};

		transactions.forEach((item) => {
			const { channel } = item;
			if (newChannelCount[channel]) {
				newChannelCount[channel]++;
			} else {
				newChannelCount[channel] = 1;
			}
		});
		channelCount.current = newChannelCount;
	}, []);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
		},
	};

	const colors = ["rgba(255, 99, 132, 1)", "rgba(53, 162, 235, 1)", "rgba(75, 192, 192, 1)"];

	const data = {
		labels: ["Channel"],
		datasets: Object.keys(channelCount.current).map((channel, index) => {
			return {
				label: channel,
				data: [channelCount.current[channel]],
				backgroundColor: colors[index],
			};
		}),
	};

	return (
		<TitleCard title={"Channel"}>
			<Bar options={options} data={data} />
		</TitleCard>
	);
}

export default BarChart;
