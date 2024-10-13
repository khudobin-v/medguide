import "./globals.css";

import Container from "@/components/layout/container";
import Header from "@/components/ui/header";
import { Golos_Text as GolosText } from "next/font/google";
import { ReactNode } from "react";

const golosTextFont = GolosText({
	subsets: ["cyrillic"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

type RootLayoutProps = {
	readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="ru">
			<body
				className={`antialiased bg-white text-black ${golosTextFont.className}`}
			>
				<Container>
					<Header />
					{children}
				</Container>
			</body>
		</html>
	);
};

export default RootLayout;
