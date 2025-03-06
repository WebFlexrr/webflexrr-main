import React from "react";

const AnnouncementBar = () => {
	return (
		<div className="bg-primary relative z-20 h-auto w-full px-5 lg:h-8">
			<div className="text-foreground mx-auto flex h-full w-full items-center justify-center md:max-w-7xl">
				<p>
					{/* We are happy to introduce that we relaunch our webflexrr Labs.
					Introducing new price plans for startup owners to accelerate their
					business with innovative solutions.{" "} */}
					Special Offer is running for First time buyer
				</p>
			</div>
		</div>
	);
};

export default AnnouncementBar;
