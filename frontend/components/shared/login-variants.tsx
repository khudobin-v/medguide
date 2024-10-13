"use client";

import { ReactNode, forwardRef, useRef } from "react";

import Button from "../ui/button";
import { loginVariantsIsOpen } from "@/atoms/login-variants-modal";
import { useAtom } from "jotai";
import useOutsideClick from "@/hooks/use-click-outside";

const LoginVariants = forwardRef<HTMLDivElement, { children?: ReactNode }>(
	(_, ref) => {
		const [modalIsOpen, setModalIsOpen] = useAtom(loginVariantsIsOpen);
		const dropdownRef = useRef<HTMLDivElement>(null);

		useOutsideClick(dropdownRef, () => setModalIsOpen(false));

		return (
			modalIsOpen && (
				<div ref={ref} className="absolute top-16 max-w-64">
					<div
						ref={dropdownRef}
						className="flex flex-col gap-2 border p-3 rounded-md shadow-lg"
					>
						<div className="flex flex-row gap-4 justify-between">
							<div className="flex flex-col gap-1">
								<h3 className="text-sm font-medium">Как пациент</h3>
								<p className="text-[0.65rem] opacity-60">
									Делитесь своими впечатлениями о врачах, записывайтесь на
									консультации онлайн и используйте электронную медицинскую
									карту
								</p>
							</div>
							<Button size="sm">Войти</Button>
						</div>
						<hr />
						<div className="flex flex-row gap-4 justify-between">
							<div className="flex flex-col gap-1">
								<h3 className="text-sm font-medium">Как врач или клиника</h3>
								<p className="text-[0.65rem] opacity-60">
									Реагируйте на отзывы пациентов, предлагайте запись на прием и
									делитесь информацией о ваших услугах
								</p>
							</div>
							<Button size="sm">Войти</Button>
						</div>
					</div>
				</div>
			)
		);
	}
);

LoginVariants.displayName = "LoginVariants";
export default LoginVariants;
