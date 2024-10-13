import { ReactNode, forwardRef } from "react";

import cn from "classnames";

type ButtonProps = {
	color?: "blue" | "green" | "red" | "yellow";
	size?: "sm" | "md" | "lg";
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	readonly children: ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ color = "blue", size = "md", onClick, children }, ref) => {
		const colorClasses = cn({
			"bg-blue-100 text-blue-500 hover:bg-blue-200": color === "blue",
			"bg-green-100 text-green-500 hover:bg-green-200": color === "green",
			"bg-red-100 text-red-500 hover:bg-red-200": color === "red",
			"bg-yellow-100 text-yellow-500 hover:bg-yellow-200": color === "yellow",
		});

		const sizeClasses = cn({
			"text-xs py-1 px-2": size === "sm",
			"text-sm py-1.5 px-2.5": size === "md",
			"py-2 px-3": size === "lg",
		});

		return (
			<button
				ref={ref}
				onClick={onClick}
				className={`flex flex-none self-center items-center justify-center outline-none transition-all select-none rounded ${colorClasses} ${sizeClasses}`}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";
export default Button;
