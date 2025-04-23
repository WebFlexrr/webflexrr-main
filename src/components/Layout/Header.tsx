import React from "react";
import SmoothScrolling from "../SmoothScrolling";

const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<SmoothScrolling>
			<main className="h-fit p-0">{children}</main>
		</SmoothScrolling>
	);
};

export default Header;
