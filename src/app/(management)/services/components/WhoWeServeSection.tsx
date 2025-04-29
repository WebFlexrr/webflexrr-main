"use client";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { motion } from "motion/react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GoArrowRight } from "react-icons/go";

const WhoWeServeSection = () => {
	const whoWeServe = [
		{
			title: "Early-Stage Startups",
			description: "Skilled professionals with years of industry experience.",
		},
		// {
		// 	title: "Growing SMBs",
		// 	description: "Using the latest tools and frameworks for optimal results.",
		// },
		{
			title: "Tech-Focused Enterprises",
			description: "Flexible and iterative approach to project management.",
		},
		{
			title: "Real Estate & E-commerce Brands ",
			description: "Rigorous testing and quality control processes.",
		},
		{
			title: "Founders Looking to Build MVPs Fast ",
			description: "Rigorous testing and quality control processes.",
		},
	];
	return (
		<section className="bg-background relative w-full px-4 pt-20 pb-32 md:px-8">
			<section className="mx-auto flex max-w-7xl flex-col items-center gap-8">
				<SectionHeading
					subHeading={"Who We Work With"}
					heading={"We specialize in working with"}
				/>
				<section className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-4">
					{whoWeServe.map((serve, index) => (
						<motion.div
							key={serve.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={"h-full w-full"}
						>
							<Card className="group bg-background/70 shadow-secondary relative flex h-full w-full justify-between overflow-hidden border border-white/[0.05] py-7 backdrop-blur-xl transition-all hover:border-white/[0.1] hover:shadow-lg">
								{/* <div
									className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
								/> */}
								<CardHeader>
									<CardTitle className="hover:text-primary/90 z-10 mb-2 text-3xl font-semibold transition-all duration-300 ease-in-out dark:text-white">
										{serve.title}
									</CardTitle>

									<CardDescription className="my-4">
										<p className="text-gray-400">{serve.description}</p>
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<GoArrowRight className="ml-2 text-5xl transition-all duration-500 ease-in-out group-hover:translate-x-4" />
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</section>
			</section>
		</section>
	);
};

export default WhoWeServeSection;
