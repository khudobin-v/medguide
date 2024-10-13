"use client";

import * as Icons from "lucide-react";

import MotionNumber from "./motion-number";
import cn from "classnames";

type StatisticsBlockProps = {
	value: number;
	iconName?: keyof typeof Icons;
	label: string;
	adjustment?: "up" | "down";
	adjustmentValue?: number;
};

const StatisticsBlock = ({
	value,
	iconName,
	label,
	adjustment,
	adjustmentValue,
}: StatisticsBlockProps) => {
	const IconComponent = iconName ? Icons[iconName] : null;

	const adjustmentClasses = cn("border rounded-md text-xs py-1 px-2", {
		"border-green-500 text-green-500": adjustment === "up",
		"border-red-500 text-red-500": adjustment === "down",
	});
	return (
		<div className="flex flex-col items-start gap-2">
			<div className="flex items-center leading-none">
				{IconComponent && (
					//@ts-expect-error: Fix error
					<IconComponent size={28} className="mr-2 text-blue-500" />
				)}
				<div className="flex flex-col items-start leading-none ">
					<MotionNumber
						value={value}
						className="text-black font-medium text-2xl"
					/>
					<span className="text-sm opacity-60 first-letter:lowercase -mt-1">
						{label}
					</span>
				</div>
			</div>
			{adjustment && (
				<div className={adjustmentClasses}>
					{(adjustment === "down" && "- ") || (adjustment === "up" && "+ ")}
					{adjustmentValue &&
						new Intl.NumberFormat("ru-RU").format(adjustmentValue)}
				</div>
			)}
		</div>
	);
};

export default StatisticsBlock;
