"use client";
import React from "react";
import Heading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Check, PanelsTopLeft } from "lucide-react";
// import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
// import { FaPlus } from "react-icons/fa";
import { BsTypeH1 } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
	{
		title: "Landing Page Websites",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		icon: <PanelsTopLeft className="h-8 w-8 text-blue-400" />,
		list: [
			"Advanced SEO & content optimization",
			"Conversion-focused landing pages",
			"Fast, mobile-friendly design",
		],
		gradient: "from-blue-500/10 via-transparent to-transparent",
	},
	{
		title: "App Development",
		description:
			"Build high-performance, scalable, and visually appealing digital products that drive engagement and conversions.",
		icon: <IoLogoAndroid className="h-8 w-8 text-green-400" />,
		list: [
			"Custom web & mobile app development",
			"Secure, high-performance architecture",
			"Cross-platform compatibility",
		],
		gradient: "from-green-500/10 via-transparent to-transparent",
	},
	{
		title: "UI/UX Design",
		description:
			"Craft beautiful, intuitive, and conversion-driven designs that enhance user experience and boost engagement.",
		icon: <BsTypeH1 className="h-8 w-8 text-purple-400" />,
		list: [
			"Wireframing & interactive prototyping",
			"Web & mobile app UI/UX design",
			"A/B testing for performance optimization",
		],
		gradient: "from-purple-500/10 via-transparent to-transparent",
	},
	{
		title: "AI Automation",
		description:
			"Leverage artificial intelligence to automate processes, reduce costs, and enhance efficiency.",
		icon: <BsTypeH1 className="h-8 w-8 text-purple-400" />,
		list: [
			"AI chatbots & virtual assistants",
			"Workflow & task automation",
			"Predictive analytics for decision-making",
		],
		gradient: "from-purple-500/10 via-transparent to-transparent",
	},
	{
		title: "Cloud & DevOps Services",
		description:
			"Deploy, scale, and manage your applications effortlessly with cloud and DevOps solutions.",
		icon: <BsTypeH1 className="h-8 w-8 text-purple-400" />,
		list: [
			"Cloud migration & infrastructure setup.",
			"CI/CD pipelines for seamless deployments",
			"Serverless & containerized solutions (Docker, Kubernetes)",
		],
		gradient: "from-purple-500/10 via-transparent to-transparent",
	},
];

const Services = () => {
	return (
		<section className="w-full py-20 md:py-20">
			<section className="mx-auto w-full max-w-7xl px-5">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
				>
					<Heading
						heading="How We help Brands?"
						subHeading="Our Services"
						para="Empowering startups with innovative solutions and strategic insights to accelerate growth and success."
					/>
				</motion.div>

				<div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.2,
								type: "tween",
								ease: "easeOut",
							}}
						>
							<ServicesCard
								title={service.title}
								description={service.description}
								list={service.list}
								gradient={service.gradient}
								icon={service.icon}
							/>
						</motion.div>
					))}
				</div>
			</section>
		</section>
	);
};

export default Services;

const ServicesCard = ({
	title,
	description,
	icon,
	gradient,
	list,
}: {
	title: string;
	description: string;
	icon: React.JSX.Element;
	list: string[];
	gradient: string;
}) => {
	return (
		<Card className="group bg-background/40 relative overflow-hidden rounded-3xl border border-white/30 backdrop-blur-xl">
			{/* Gradient Background */}
			<div
				className={`absolute inset-0 bg-gradient-to-br opacity-100 transition-opacity duration-500 group-hover:opacity-80 ${gradient}`}
			/>

			{/* Content */}
			<CardHeader className="relative z-10 flex flex-col items-start gap-3 p-6">
				<motion.div
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] backdrop-blur-lg"
				>
					{icon}
				</motion.div>
				<div className="mt-4 flex flex-col items-start gap-2">
					<h5 className="text-2xl font-semibold text-white">{title}</h5>
					<p className="text-gray-400">{description}</p>
				</div>
			</CardHeader>

			<Separator className="opacity-10" />

			<CardContent className="relative z-10 flex flex-col gap-3 p-6">
				{list.map((item) => (
					<motion.div
						key={item}
						className="flex items-center gap-3"
						whileHover={{ x: 5 }}
						transition={{ duration: 0.2 }}
					>
						<span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] backdrop-blur-lg">
							<Check size={12} className="text-blue-400" />
						</span>
						<p className="text-sm text-gray-400">{item}</p>
					</motion.div>
				))}
			</CardContent>
		</Card>
	);
};
