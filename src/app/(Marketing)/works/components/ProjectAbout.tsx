"use client";

import React, { FC } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectAboutProps {
	description?: string;
}
const ProjectAbout: FC<ProjectAboutProps> = ({ description }) => {
	return (
		<section className="dark bg-background dark relative px-5 py-36 md:px-8">
			<section className="mx-auto flex w-full max-w-3xl flex-col gap-8 lg:max-w-7xl lg:flex-row">
				{/* left Section */}
				<section className="flex w-full flex-col gap-6 lg:w-1/2">
					<Badge>The Client</Badge>
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-left text-2xl font-bold text-white md:text-6xl"
					>
						About the Project
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="mt-3 text-white/30 md:text-xl"
					>
						{description}
						{/* Ladakh Tempo Union - Biggest tourist tempo provider in ladakh. */}
					</motion.p>
					<section className="flex justify-between">
						<section className="flex w-1/2 flex-col gap-2 text-white">
							<span>Project Type</span>
							<span> UI/UX Design</span>
						</section>
						<section className="flex w-1/2 flex-col gap-2 text-white">
							<span>Platform</span>
							<span> Mobile & Web</span>
						</section>
					</section>
				</section>
				{/* right Section */}
				<section className="flex w-full flex-col gap-7 lg:w-1/2">
					<section className="aspect-video w-full"></section>
					<Card className="border-secondary w-full rounded-lg border text-white">
						<CardHeader>
							<CardTitle>
								<h4>Our Mission</h4>
							</CardTitle>
							<CardDescription>
								Our mission was to create a sustainable food delivery platform
								that reduces food waste while providing affordable options for
								consumers and additional revenue streams for restaurants.
							</CardDescription>
						</CardHeader>
						<CardContent className="flex w-full flex-col gap-5">
							<div className="flex w-full items-center justify-start gap-3">
								<section className="w-fit">
									<div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
										<Check size={16} />
									</div>
								</section>
								<section className="w-full">
									Develop an intuitive interface for both consumers and
									restaurant partners
								</section>
							</div>
							<div className="flex w-full items-center justify-start gap-3">
								<section className="w-fit">
									<div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
										<Check size={16} />
									</div>
								</section>
								<section className="w-full">
									Create efficient logistics management system for timely order
									fulfillment
								</section>
							</div>
							<div className="flex w-full items-center justify-start gap-3">
								<section className="w-fit">
									<div className="bg-primary flex h-6 w-6 items-center justify-center rounded-full">
										<Check size={16} />
									</div>
								</section>
								<section className="w-full">
									Implement real-time tracking and communication features
								</section>
							</div>
						</CardContent>
					</Card>
				</section>
			</section>
		</section>
	);
};

export default ProjectAbout;
