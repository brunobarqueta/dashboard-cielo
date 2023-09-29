import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

function Header() {
	const { pageTitle } = useSelector((state) => state.header);
	const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));

	useEffect(() => {
		themeChange(false);
		if (currentTheme === null) {
			if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setCurrentTheme("dark");
			} else {
				setCurrentTheme("light");
			}
		}
	}, []);

	return (
		<>
			<div className="navbar flex justify-between bg-base-100 z-10 shadow-md ">
				{/* Menu toogle for mobile view or small screen */}
				<div className="">
					<label htmlFor="left-sidebar-drawer" className="btn btn-primary drawer-button lg:hidden">
						<Bars3Icon className="h-5 inline-block w-5" />
					</label>
					<h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
				</div>

				<div className="order-last">
					<label className="swap ">
						<input type="checkbox" />
						<SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "dark" ? "swap-on" : "swap-off")} />
						<MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "light" ? "swap-on" : "swap-off")} />
					</label>

					{/* Profile icon, opening menu on click */}
					<div className="dropdown dropdown-end ml-4">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="/me.jpeg" alt="profile" />
							</div>
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
