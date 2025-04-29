import React, { cache } from "react";
import BlurredBg from "@/components/BlurredBg";
import Footer2 from "@/components/Footer2";
import { services } from "@/db/services";

import CallToActionBanner from "@/components/CallToActionBanner";
import { Metadata } from "next";
import OffersSection from "../components/OffersSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import BannerSection from "../components/BannerSection";
import { notFound } from "next/navigation";
import AboutSection from "../components/AboutSection";

import ServicesProcessSection from "../components/ServicesProcessSection";
import SmoothScrolling from "@/components/SmoothScrolling";

// Service data - in a real app, this would come from a CMS or API
// const servicesData = {
// 	"web-development": {
// 		title: "Web Development",
// 		description:
// 			"Create powerful web applications with cutting-edge technologies",
// 		bannerImage: "/images/services/web-development-banner.jpg",
// 		features: [
// 			"Custom web application development",
// 			"Progressive Web Apps (PWA)",
// 			"E-commerce solutions",
// 			"Content Management Systems",
// 			"API development and integration",
// 			"Performance optimization",
// 		],
// 		benefits: [
// 			"Increased online presence",
// 			"Better user engagement",
// 			"Improved conversion rates",
// 			"Scalable solutions",
// 			"Cross-platform compatibility",
// 		],
// 		process: [
// 			{
// 				title: "Discovery",
// 				description: "Understanding your requirements and business goals",
// 				image: "/images/services/discovery.jpg",
// 			},
// 			{
// 				title: "Planning",
// 				description: "Creating a detailed roadmap and technical architecture",
// 				image: "/images/services/planning.jpg",
// 			},
// 			{
// 				title: "Development",
// 				description: "Building your solution with agile methodology",
// 				image: "/images/services/development.jpg",
// 			},
// 			{
// 				title: "Testing",
// 				description: "Ensuring quality and performance",
// 				image: "/images/services/testing.jpg",
// 			},
// 			{
// 				title: "Deployment",
// 				description: "Launching your application securely",
// 				image: "/images/services/deployment.jpg",
// 			},
// 			{
// 				title: "Support",
// 				description: "Ongoing maintenance and updates",
// 				image: "/images/services/support.jpg",
// 			},
// 		],
// 	},
// 	"ui-ux-design": {
// 		title: "UI/UX Design",
// 		description: "Create intuitive and engaging user experiences",
// 		bannerImage: "/images/services/ui-ux-design-banner.jpg",
// 		features: [
// 			"User Interface Design",
// 			"User Experience Design",
// 			"Wireframing & Prototyping",
// 			"Design Systems",
// 			"Interactive Mockups",
// 			"Usability Testing",
// 		],
// 		benefits: [
// 			"Enhanced user satisfaction",
// 			"Increased user retention",
// 			"Better brand perception",
// 			"Reduced development costs",
// 			"Competitive advantage",
// 		],
// 		process: [
// 			{
// 				title: "Research",
// 				description: "Understanding user needs and market analysis",
// 				image: "/images/services/research.jpg",
// 			},
// 			{
// 				title: "Strategy",
// 				description: "Defining design goals and user journeys",
// 				image: "/images/services/strategy.jpg",
// 			},
// 			{
// 				title: "Design",
// 				description: "Creating visual designs and interactions",
// 				image: "/images/services/design.jpg",
// 			},
// 			{
// 				title: "Testing",
// 				description: "User testing and feedback collection",
// 				image: "/images/services/testing.jpg",
// 			},
// 			{
// 				title: "Implementation",
// 				description: "Design handoff and development support",
// 				image: "/images/services/implementation.jpg",
// 			},
// 			{
// 				title: "Iteration",
// 				description: "Continuous improvement based on feedback",
// 				image: "/images/services/iteration.jpg",
// 			},
// 		],
// 	},
// };

//chached data
const getServiceData = cache(async (slug: string) =>
	services.find((service) => service.slug === slug)
);

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const service = await getServiceData((await params).slug);

	console.log("This data is from backend", service);

	if (!service) {
		return {
			title: "Service Not Found",
			description: "The requested Service could not be found.",
		};
	}

	return {
		title: service.title || "Project",
		description: service.tagline || "Service details",
		openGraph: {
			title: service.title || "Service",
			description: service.tagline || "Service details",
			images: service.bannerImage
				? [
						{
							url: service.bannerImage,
							width: 1200,
							height: 630,
							alt: service.title || "Service thumbnail",
						},
					]
				: [],
		},
	};
}

export async function generateStaticParams() {
	return services.map((service) => ({
		slug: service.slug,
	}));
}

const ServicePage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const serviceData = await getServiceData((await params).slug);

	if (!serviceData) {
		notFound();
	}

	return (
		<SmoothScrolling>
			<main className="bg-background dark h-fit p-0">
				<BlurredBg />
				<NavBar />
				<HeroSection
					pillText={"Services Details"}
					title={serviceData.title}
					tagline={serviceData.tagline}
				/>
				<BannerSection
					image={serviceData?.bannerImage}
					alt={serviceData?.title}
				/>
				<AboutSection
					title={serviceData.title}
					description={serviceData.description}
				/>

				{/*  Section */}
				<OffersSection offers={serviceData?.offers} />
				{/* Features Section */}
				{/* <FeaturesSection features={serviceData?.features} /> */}

				{/* Benefits Section */}
				{/* <BenefitSection benefits={serviceData?.benefits} /> */}
				{/* Process Section */}
				<ServicesProcessSection />

				<CallToActionBanner />
				<Footer2 />
			</main>
		</SmoothScrolling>
	);
};

export default ServicePage;
