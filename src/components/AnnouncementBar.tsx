import React from "react";

const AnnouncementBar = () => {
	return (
		<div className="bg-primary relative z-20 h-8 w-full px-5">
			<div className="text-foreground mx-auto flex h-full w-full items-center justify-center md:max-w-7xl">
				<p>**Currently website is under maintenance.**</p>
			</div>
		</div>
	);
};

export default AnnouncementBar;
