import { useEffect } from "react";

const useOutsideClick = (
	ref: React.RefObject<HTMLElement>,
	handler: (event: MouseEvent) => void,
	buttonRef?: React.RefObject<HTMLButtonElement>
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			if (
				!ref.current ||
				ref.current.contains(event.target as Node) ||
				(buttonRef?.current && buttonRef.current.contains(event.target as Node))
			) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
		};
	}, [ref, handler, buttonRef]);
};

export default useOutsideClick;
