import React, { cache } from "react";
import BlurredBg from "@/components/BlurredBg";
import Footer2 from "@/components/Footer2";
import { services } from "@/db/services";
import BannerSection from "../components/BannerSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitSection from "../components/BenafitSection";
import ProcessSection from "../components/ProcessSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import NavBar2 from "@/components/Navbar2";
import { Metadata } from "next";

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

	if (!service) {
		return {
			title: "Service Not Found",
			description: "The requested Service could not be found.",
		};
	}

	return {
		title: service.title || "Project",
		description: service.description || "Service details",
		openGraph: {
			title: service.title || "Service",
			description: service.description || "Service details",
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

const ServicePage = async ({
	params,
}: {
	params: Promise<{ service: string }>;
}) => {
	const serviceData = await getServiceData((await params).service);

	return (
		// <SmoothScrolling>
		<main className="h-fit p-0">
			<BlurredBg />
			<NavBar2 />

			{/* Back Button
				<div className="absolute top-8 left-4 z-10 md:left-8">
					<Link
						href="/services"
						className="inline-flex items-center rounded-full bg-white/[0.05] px-4 py-2 text-sm text-white backdrop-blur-xl transition-colors hover:bg-white/[0.1]"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Services
					</Link>
				</div> */}

			{/* Banner Section */}
			<BannerSection
				image={serviceData?.bannerImage}
				alt={serviceData?.title}
				title={serviceData?.title}
				description={serviceData?.description}
			/>

			{/* Features Section */}
			<FeaturesSection features={serviceData?.features} />

			{/* Benefits Section */}
			<BenefitSection benefits={serviceData?.benefits} />
			{/* Process Section */}
			<ProcessSection process={serviceData?.process} />

			{/* CTA Section */}
			{/* <section className="relative px-4 py-20 md:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 p-12 text-center backdrop-blur-xl">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="mb-4 text-3xl font-bold text-white"
							>
								Ready to Get Started?
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="mb-8 text-gray-400"
							>
								Contact us to discuss your project and see how we can help you
								succeed.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
							>
								<Link
									href="/contact"
									className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-lg font-medium text-white transition-all hover:from-blue-600 hover:to-purple-600"
								>
									Get in Touch
								</Link>
							</motion.div>
						</div>
					</div>
				</section> */}
			<CallToActionBanner />
			<Footer2 />
		</main>
		// </SmoothScrolling>
	);
};

export default ServicePage;
