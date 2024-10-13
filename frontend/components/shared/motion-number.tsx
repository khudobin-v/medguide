"use client";

import CountUp from "react-countup";

type MotionNumberProps = {
	className?: string;
	value: number;
	duration?: number;
};

const MotionNumber = ({
	className,
	value,
	duration = 10,
}: MotionNumberProps) => {
	const startValue = Math.floor(value - 0.04 * value);

	return (
		<CountUp
			start={startValue}
			end={value}
			duration={duration}
			className={className}
		/>
	);
};

export default MotionNumber;
