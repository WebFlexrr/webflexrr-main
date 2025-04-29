"use client";
import { services } from "@/db/services";
import React from "react";
import { motion } from "motion/react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const ServicesGrid = () => {
	return (
		<section className="dark relative">
			<div className="bg-background absolute -z-10 h-full w-full"></div>
			<section className="mx-auto grid max-w-7xl gap-8 px-4 py-40 md:grid-cols-2 md:px-8 lg:grid-cols-3">
				{services.map((service, index) => (
					<motion.div
						key={service.title}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className={"h-full w-full"}
					>
						<Card className="group bg-background/70 shadow-secondary relative flex h-full w-full justify-between overflow-hidden border border-white/[0.05] py-7 backdrop-blur-xl transition-all hover:border-white/[0.1] hover:shadow-lg">
							<div
								className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
							/>
							<CardHeader>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-white">
									{service.icon}
								</div>
								<Link
									href={`/services/${service.slug}`}
									className="z-10 mb-2 text-3xl font-semibold transition-all"
								>
									<CardTitle className="hover:text-primary/90 text-white transition-all duration-300 ease-in-out">
										{service.title}
									</CardTitle>
								</Link>
								<CardDescription className="my-4">
									<p className="text-gray-400">{service.tagline}</p>
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Link
									href={`/services/${service.slug}`}
									className="flex items-center text-lg text-blue-400"
								>
									<GoArrowRight className="ml-2 text-5xl transition-all duration-500 ease-in-out group-hover:translate-x-4" />
								</Link>
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</section>
		</section>
	);
};

export default ServicesGrid;
