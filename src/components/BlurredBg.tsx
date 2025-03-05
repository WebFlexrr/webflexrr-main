import React from "react";

const BlurredBg = () => {
	return (
		<section className="absolute left-0 right-0 top-0 z-0 h-svh w-full bg-gradient-to-b from-[#002f65] to-background">
			<section className="relative mx-auto mt-60 w-full max-w-lg">
				<div className="absolute -left-3/4 top-0 h-16 w-[740px] rotate-[150deg] bg-white blur-[10rem]" />
				<div className="absolute -right-3/4 top-0 h-16 w-[740px] rotate-[30deg] bg-white blur-[10rem]" />
			</section>
		</section>
	);
};

export default BlurredBg;
