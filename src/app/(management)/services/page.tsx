"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import {
// 	ArrowRight,
// 	Code,
// 	Palette,
// 	Layout,
// 	Smartphone,
// 	Database,
// 	Search,
// } from "lucide-react";
import BlurredBg from "@/components/BlurredBg";
import SmoothScrolling from "@/components/SmoothScrolling";
import { services } from "@/db/services";
import { ArrowRight } from "lucide-react";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer2 from "@/components/Footer2";
import NavBar2 from "@/components/Navbar";
import HeroSection from "../../(Marketing)/works/components/HeroSection";

// const whyChooseUs = [
// 	{
// 		title: "Expert Team",
// 		description: "Skilled professionals with years of industry experience.",
// 	},
// 	{
// 		title: "Modern Technologies",
// 		description: "Using the latest tools and frameworks for optimal results.",
// 	},
// 	{
// 		title: "Agile Development",
// 		description: "Flexible and iterative approach to project management.",
// 	},
// 	{
// 		title: "Quality Assurance",
// 		description: "Rigorous testing and quality control processes.",
// 	},
// ];

const ServicesPage = () => {
	return (
		<SmoothScrolling>
			<main className="bg-background dark h-fit p-0">
				<BlurredBg />
				<NavBar2 />

				{/* Hero Section */}
				{/* <section className="relative px-4 pt-32 md:px-8">
					<div className="mx-auto max-w-7xl text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-4xl font-bold text-white md:text-6xl"
						>
							Transform Your Ideas Into Reality
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mt-6 text-lg text-gray-400 md:text-xl"
						>
							We deliver cutting-edge software solutions tailored to your
							business needs
						</motion.p>
					</div>
				</section> */}
				<HeroSection
					title={"Transform Your Ideas Into Reality"}
					description={
						"We deliver cutting-edge software solutions tailored to your business needs"
					}
				/>
				{/* Services Grid */}
				<section className="relative px-4 py-20 pb-40 md:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{services.map((service, index) => (
								<motion.div
									key={service.title}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									<Link href={`/services/${service.slug}`}>
										<div className="group relative overflow-hidden rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 p-8 backdrop-blur-xl transition-all hover:border-white/[0.1]">
											<div
												className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
											/>
											<div className="relative z-10">
												<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-white">
													{service.icon}
												</div>
												<h3 className="mb-2 text-xl font-semibold text-white">
													{service.title}
												</h3>
												<p className="mb-4 text-gray-400">
													{service.description}
												</p>
												<div className="flex items-center text-blue-400">
													Learn more <ArrowRight className="ml-2 h-4 w-4" />
												</div>
											</div>
										</div>
									</Link>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Why Choose Us
				<section className="relative px-4 py-20 md:px-8">
					<div className="mx-auto max-w-7xl">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
						>
							Why Choose Us
						</motion.h2>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{whyChooseUs.map((item, index) => (
								<motion.div
									key={item.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 p-6 backdrop-blur-xl"
								>
									<h3 className="mb-2 text-xl font-semibold text-white">
										{item.title}
									</h3>
									<p className="text-gray-400">{item.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section> */}

				{/* CTA Section
				<section className="relative px-4 py-20 md:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 p-12 text-center backdrop-blur-xl">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="mb-4 text-3xl font-bold text-white md:text-4xl"
							>
								Ready to Start Your Project?
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="mb-8 text-lg text-gray-400"
							>
								Let's discuss your requirements and create something amazing
								together.
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
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</motion.div>
						</div>
					</div>
				</section> */}
				<CallToActionBanner />

				<Footer2 />
			</main>
		</SmoothScrolling>
	);
};

export default ServicesPage;
