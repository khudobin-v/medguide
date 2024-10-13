import StatisticsBlock from "@/components/shared/statistics-block";

const Hero = () => {
	return (
		<div className="grid grid-cols-4">
			<div className="border-r border-gray-200 pl-3">
				<StatisticsBlock
					value={1000}
					label={"Число статистики"}
					iconName="Home"
					adjustment="down"
					adjustmentValue={10000}
				/>
			</div>
			<div className="border-r border-gray-200 pl-3">
				<StatisticsBlock
					value={4000}
					label={"Число статистики"}
					iconName="Home"
					adjustment="down"
					adjustmentValue={10000}
				/>
			</div>
			<div className="border-r border-gray-200 pl-3">
				<StatisticsBlock
					value={3404}
					label={"Число статистики"}
					iconName="Home"
					adjustment="down"
					adjustmentValue={10000}
				/>
			</div>
			<div className="pl-3">
				<StatisticsBlock
					value={5678}
					label={"Число статистики"}
					iconName="Home"
					adjustment="down"
					adjustmentValue={10000}
				/>
			</div>
		</div>
	);
};

export default Hero;
