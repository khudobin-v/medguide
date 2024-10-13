import cn from "classnames";
import Link from "next/link";

type LogoProps = {
	isLink?: boolean;
	variant?: "colorful" | "monochrome";
};

const Logo = ({ isLink = false, variant = "colorful" }: LogoProps) => {
	const variantClasses = cn(
		"select-none first-letter:lowercase first-letter:select-none",
		{
			"font-semibold text-2xl": variant === "colorful",
			"font-medium text-xl": variant === "monochrome",
		}
	);

	const medVariantClasses = cn({
		"text-blue-500": variant === "colorful",
		"text-gray-950": variant === "monochrome",
	});

	const guideVariantClasses = cn({
		"text-red-500": variant === "colorful",
		"text-gray-950": variant === "monochrome",
	});

	const content = (
		<div className="flex flex-row gap-0">
			<p className={`${medVariantClasses} ${variantClasses}`}>Мед</p>
			<p className={`${guideVariantClasses} ${variantClasses}`}>Гид</p>
		</div>
	);

	return isLink ? (
		<Link
			href="/"
			className="flex-1 flex items-center justify-center outline-none w-full"
		>
			{content}
		</Link>
	) : (
		content
	);
};

export default Logo;
