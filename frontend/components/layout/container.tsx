import { ReactNode } from "react";

type ContainerProps = {
	readonly children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return <div className="px-36">{children}</div>;
};

export default Container;
