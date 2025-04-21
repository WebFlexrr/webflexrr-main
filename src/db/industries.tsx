import { Code, Palette } from "lucide-react";

export const industries = [
	{
		title: "Ecommerce App Developement",
		slug: "Ecommerce",
		description:
			"Custom web applications built with modern technologies and best practices.",
		icon: <Code className="h-8 w-8" />,
		link: "/services/web-development",
		gradient: "from-blue-500/20 via-transparent to-purple-500/10",
		bannerImage: "/images/services/web-development-banner.jpg",
		OfferDescription:
			"We design and build landing pages that convert. Whether it's for a product launch, lead gen campaign, or ad funnel, we focus on performance, clarity, and speed. Our landing pages are",
		features: [
			"Custom web application development",
			"Progressive Web Apps (PWA)",
			"E-commerce solutions",
			"Content Management Systems",
			"API development and integration",
			"Performance optimization",
		],
		benefits: [
			"Increased online presence",
			"Better user engagement",
			"Improved conversion rates",
			"Scalable solutions",
			"Cross-platform compatibility",
		],
		process: [
			{
				title: "Discovery",
				description: "Understanding your requirements and business goals",
				image: "/images/services/discovery.jpg",
			},
			{
				title: "Planning",
				description: "Creating a detailed roadmap and technical architecture",
				image: "/images/services/planning.jpg",
			},
			{
				title: "Development",
				description: "Building your solution with agile methodology",
				image: "/images/services/development.jpg",
			},
			{
				title: "Testing",
				description: "Ensuring quality and performance",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Deployment",
				description: "Launching your application securely",
				image: "/images/services/deployment.jpg",
			},
			{
				title: "Support",
				description: "Ongoing maintenance and updates",
				image: "/images/services/support.jpg",
			},
		],
	},
	{
		title: "Health Care Developement",
		slug: "uiux-design",
		description:
			"User-centered design solutions that enhance user experience and engagement.",
		icon: <Palette className="h-8 w-8" />,
		link: "/services/ui-ux-design",
		gradient: "from-purple-500/20 via-transparent to-pink-500/10",
		bannerImage: "/images/services/ui-ux-design-banner.jpg",
		OfferDescription:
			"We design and build landing pages that convert. Whether it's for a product launch, lead gen campaign, or ad funnel, we focus on performance, clarity, and speed. Our landing pages are",
		features: [
			"User Interface Design",
			"User Experience Design",
			"Wireframing & Prototyping",
			"Design Systems",
			"Interactive Mockups",
			"Usability Testing",
		],
		benefits: [
			"Enhanced user satisfaction",
			"Increased user retention",
			"Better brand perception",
			"Reduced development costs",
			"Competitive advantage",
		],
		process: [
			{
				title: "Research",
				description: "Understanding user needs and market analysis",
				image: "/images/services/research.jpg",
			},
			{
				title: "Strategy",
				description: "Defining design goals and user journeys",
				image: "/images/services/strategy.jpg",
			},
			{
				title: "Design",
				description: "Creating visual designs and interactions",
				image: "/images/services/design.jpg",
			},
			{
				title: "Testing",
				description: "User testing and feedback collection",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Implementation",
				description: "Design handoff and development support",
				image: "/images/services/implementation.jpg",
			},
			{
				title: "Iteration",
				description: "Continuous improvement based on feedback",
				image: "/images/services/iteration.jpg",
			},
		],
	},
];
