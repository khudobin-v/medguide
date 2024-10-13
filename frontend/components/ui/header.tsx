"use client";

import Button from "./button";
import LoginVariants from "../shared/login-variants";
import Logo from "../shared/logo";
import SelectLocation from "../shared/select-location";
import { loginVariantsIsOpen } from "@/atoms/login-variants-modal";
import { useAtom } from "jotai";

const Header = () => {
	const [modalIsOpen, setModalIsOpen] = useAtom(loginVariantsIsOpen);

	return (
		<div className="bg-white">
			<div className="flex flex-row items-center justify-between py-6">
				<div className="w-72 flex justify-start">
					<SelectLocation
						cities={[
							"Москва",
							"Санкт-Петербург",
							"Новосибирск",
							"Екатеринбург",
						]}
					/>
				</div>
				<div className="w-full align-middle">
					<Logo isLink />
				</div>
				<div className="w-72 flex justify-end">
					<Button
						size="sm"
						color="red"	
						onClick={() => {
							setModalIsOpen(!modalIsOpen);
						}}
					>
						Войти
					</Button>
					<LoginVariants />
				</div>
			</div>
		</div>
	);
};

export default Header;
