import React from "react";
import BlurredBg from "@/components/BlurredBg";
import SmoothScrolling from "@/components/SmoothScrolling";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer2 from "@/components/Footer2";

import HeroSection from "../../../components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import ServicesGrid from "./components/ServicesGrid";
import WhoWeServeSection from "./components/WhoWeServeSection";
import NavBar from "@/components/Navbar";

const ServicesPage = () => {
	return (
		<SmoothScrolling>
			<main className="h-fit p-0">
				<BlurredBg />
				<NavBar />
				<HeroSection
					pillText={"Services"}
					title={"Count on Webflexrr Labs for Your Digital Journey "}
					tagline={
						"Empowering Startups & Businesses with Scalable AI & Software Solutions  From landing pages to full-stack apps and AI automation — we build with performance, purpose, and people in mind."
					}
				/>
				<ServicesGrid />
				<WhoWeServeSection />
				<ProcessSection />

				<CallToActionBanner />
				<Footer2 />
			</main>
		</SmoothScrolling>
	);
};

export default ServicesPage;
