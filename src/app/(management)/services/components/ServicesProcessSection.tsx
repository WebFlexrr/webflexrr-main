"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ServicesProcessSection = () => {
	const [hoveredStep, setHoveredStep] = useState<number | null>(null);

	const steps = [
		{
			number: "01",
			title: "Discovery Call",
			description:
				"We start with understanding your vision, requirements, and business goals. This initial consultation helps us map out the perfect strategy for your project.",
		},
		{
			number: "02",
			title: "Strategy",
			description: "Our experts Technical planning & timeline setup.",
		},
		{
			number: "03",
			title: "Design",
			description:
				"Our UI/UX experts create intuitive wireframes and high-fidelity prototypes that capture your brand identity while ensuring exceptional user experience.",
		},
		{
			number: "04",
			title: "Development",
			description:
				"Our skilled developers bring the designs to life using clean, scalable code. We follow industry best practices to ensure your application is robust and future-proof.",
		},
		{
			number: "05",
			title: "Testing",
			description:
				"Rigorous quality assurance across multiple devices and platforms ensures your application is bug-free, responsive, and delivers a seamless experience.",
		},
		{
			number: "06",
			title: "Launch",
			description:
				"We handle the entire submission and release process to make your application available on app stores, followed by continuous support and maintenance.",
		},
		{
			number: "07",
			title: "Support",
			description:
				"We handle the entire submission and release process to make your application available on app stores, followed by continuous support and maintenance.",
		},
	];
	return (
		<section className="relative w-full bg-white px-4 py-20 md:px-8">
			{/* <section className="dark bg-background flex min-h-screen w-full flex-col items-center px-4 py-16 text-blue-400"> */}
			<section className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row md:items-start md:gap-2">
				<section className="top-32 left-0 mt-10 flex h-auto w-full flex-col gap-4 text-center text-black md:sticky md:w-1/2">
					<motion.span
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="flex gap-3 rounded-full p-0.5"
					>
						<div className="border-secondary rounded-full border bg-white px-7 py-3 text-base">
							Our Process
						</div>
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
						className="text-left text-3xl font-bold text-black md:text-5xl lg:text-5xl"
					>
						Our Working Process
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, ease: "easeInOut" }}
						className="w-full max-w-lg text-left text-black"
					>
						Discover the seamless journey from idea to digital masterpiece with
						Webflexrr's refined working process.
					</motion.p>
				</section>

				<section className="relative flex w-full flex-col gap-8 md:w-1/2 md:gap-32">
					{/* Vertical timeline line */}
					<motion.div className="bg-secondary absolute left-5 h-full w-0.5 -translate-x-1/2 transform"></motion.div>

					{/* Steps */}
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className={`flex ${index % 2 === 0 ? "pl-14 lg:flex-row" : "pl-14 lg:flex-row-reverse"} relative flex-col-reverse items-center justify-end gap-10`}
							onMouseEnter={() => setHoveredStep(index)}
							onMouseLeave={() => setHoveredStep(null)}
						>
							{/* Timeline dot */}
							<div className="absolute left-5 z-10 -translate-x-1/2 transform">
								<div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
									<div className="bg-secondary h-2 w-2 rounded-full"></div>
								</div>
							</div>

							{/* Content */}
							<div
								className={`flex w-full transform flex-col rounded-lg bg-gray-800 p-6 shadow-lg transition-all duration-300 ${
									hoveredStep === index ? "scale-105" : ""
								}`}
							>
								<div className="mb-2 text-xs text-gray-400">
									Step {step.number}
								</div>
								<h3 className={`mb-3 text-4xl font-semibold text-blue-400`}>
									{step.title}
								</h3>
								<p className="text-base leading-relaxed text-gray-300">
									{step.description}
								</p>
							</div>

							{/* Empty space to create alternating layout */}
							{/* <div className="mx-8 w-96"></div> */}
						</motion.div>
					))}

					{/* CTA Button at the bottom */}
				</section>
			</section>
			<section className="mt-20 text-center">
				<Link
					href={process.env.NEXT_PUBLIC_MEETING_LINK!}
					className="mx-auto flex w-fit items-center rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
				>
					Start your project
					<ChevronRight className="ml-2 h-4 w-4" />
				</Link>
				<p className="mt-6 text-sm text-gray-400">
					Let's transform your ideas into reality
				</p>
			</section>
		</section>
	);
};

export default ServicesProcessSection;
