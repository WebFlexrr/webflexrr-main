import AnnouncementBar from "@/components/AnnouncementBar";
import BlurredBg from "@/components/BlurredBg";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import React from "react";

const ContactPage = () => {
	return (
		<SmoothScrolling>
			<main className="h-fit p-0">
				<BlurredBg />
				<AnnouncementBar />
				<NavBar />

				<Footer2 />
			</main>
		</SmoothScrolling>
	);
};

export default ContactPage;
