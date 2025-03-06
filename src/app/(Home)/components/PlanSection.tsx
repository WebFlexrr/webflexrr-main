"use client";
import Heading from "@/components/SectionHeading";
import PlansCard from "@/components/PlansCard";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const plans = [
	{
		type: "Basic",
		title: "Landing Page",
		description:
			"A single, high-impact page designed to capture leads and drive conversions.",
		price: 29,
		list: [
			"Keyword optimization",
			"Automated meta tags",
			"SEO monitoring",
			"Monthly reports",
		],
	},
	{
		type: "Recommended",
		title: "Pro",
		description:
			"Advanced features and priority support for growing businesses.",
		price: 79,
		list: [
			"All Basic features",
			"Content suggestions",
			"Link optimization",
			"Priority support",
			"Advanced analytics",
		],
	},
	{
		type: "Advanced",
		title: "Enterprise",
		description:
			"Custom solutions and dedicated support for large-scale operations.",
		price: 149,
		list: [
			"All Pro features",
			"Custom integrations",
			"Dedicated support",
			"API access",
			"White-label options",
		],
	},
];

const PlanSection = (): React.JSX.Element => {
	return (
		<section
			id="plans"
			className="relative h-auto w-full overflow-hidden bg-[#0A0A0B] py-20"
		>
			{/* Background Effects */}
			{/* <div className="pointer-events-none absolute inset-0">
				{/* Left glow *
				<div className="absolute top-0 -left-32 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px]" />

				{/* Center glow 
				<div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

				{/* Right glow 
				<div className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[150px]" />

				{/* Dark gradient overlay 
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B] to-[#0A0A0B]" />

				{/* Noise texture 
				<div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
			</div> */}

			<section className="relative mx-auto flex h-auto w-full max-w-7xl flex-col px-5">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
				>
					<Heading
						heading="Simple, transparent pricing"
						subHeading="Our Pricing"
						para="Choose the perfect plan for your needs. Includes all updates and features."
					/>
				</motion.div>

				{/* Toggle Switch */}
				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mx-auto mt-8 flex items-center gap-3"
				>
					<span className="text-sm text-gray-300">Monthly</span>
					<div className="h-6 w-11 rounded-full bg-purple-900/50 p-1">
						<div className="h-4 w-4 rounded-full bg-purple-500" />
					</div>
					<span className="text-sm text-white">Yearly</span>
					<span className="rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
						Save 20%
					</span>
				</motion.div> */}

				<section className="mx-auto mt-16 mb-24 grid h-auto w-full max-w-lg grid-cols-1 gap-8 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:gap-10 xl:px-0">
					{plans.map((plan, index) => (
						<PlansCard
							key={plan.title}
							type={plan.type}
							title={plan.title}
							description={plan.description}
							price={plan.price}
							lists={plan.list}
							index={index}
						/>
					))}
				</section>

				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex h-auto w-full flex-col items-center justify-center gap-5"
				>
					<Link
						href={"/plans"}
						className="flex items-center gap-2 rounded-full bg-[#1a1035] px-4 py-2 text-sm font-medium text-white transition-all hover:gap-3 hover:bg-[#1a1035]/80"
					>
						✨ See all features and compare plans
					</Link>
				</motion.section>
			</section>
		</section>
	);
};

export default PlanSection;
