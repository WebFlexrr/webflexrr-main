import React from "react";

const BlurredBg = () => {
	return (
		<section className="to-background absolute top-0 right-0 left-0 z-0 h-svh w-full bg-gradient-to-b from-[#002f65]">
			<section className="relative mx-auto mt-60 w-full max-w-lg">
				<div className="absolute top-0 -left-3/4 h-16 w-[740px] rotate-[150deg] bg-white blur-[10rem]" />
				<div className="absolute top-0 -right-3/4 h-16 w-[740px] rotate-[30deg] bg-white blur-[10rem]" />
			</section>
		</section>
	);
};

export default BlurredBg;
