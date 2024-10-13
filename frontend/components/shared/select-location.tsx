"use client";

import { useEffect, useRef, useState } from "react";

import { currentCityAtom } from "@/atoms/current-city";
import useOutsideClick from "@/hooks/use-click-outside";
import { useAtom } from "jotai";
import { Navigation } from "lucide-react";

type SelectLocationProps = {
	cities: string[];
};

const SelectLocation = ({ cities }: SelectLocationProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currentCity, setCurrentCity] = useAtom(currentCityAtom);

	useEffect(() => {
		if (cities.length && !currentCity) {
			setCurrentCity(cities[0]);
		}
	}, [cities, currentCity, setCurrentCity]);

	const dropdownRef = useRef<HTMLUListElement>(null);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};
	useOutsideClick(dropdownRef, () => setIsOpen(false));

	return (
		<div className="flex flex-row gap-2 items-center relative text-sm text-blue-500">
			<Navigation size={16} />
			<p onClick={() => toggleOpen()} className="cursor-pointer select-none">
				{currentCity}
			</p>
			{isOpen && (
				<ul
					ref={dropdownRef}
					className="absolute top-8 border p-1 rounded text-xs max-h-32 min-w-40 overflow-y-auto shadow-lg"
				>
					{cities.map((city, index) => (
						<li
							className="p-1 hover:bg-blue-100 transition-colors cursor-pointer flex flex-row gap-2 items-center"
							key={index}
							onClick={() => {
								setCurrentCity(city);
								setIsOpen(false);
							}}
						>
							<Navigation size={12} />
							{city}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SelectLocation;
