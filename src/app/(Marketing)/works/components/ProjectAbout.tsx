"use client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React, { FC } from "react";
import { motion } from "motion/react";

interface ProjectAboutProps {
	project: {
		title?: string;
		thumbnail?: SanityImageSource;
		clientName?: string;
		category?: string;
		timeline?: string;
		budget?: string;
		description?: string;
	};
}
const ProjectAbout: FC<ProjectAboutProps> = ({ project }) => {
	return (
		<section className="w-full py-20">
			<section className="mx-auto max-w-7xl">
				<section className="flex w-1/2 flex-col gap-6">
					<motion.h2
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-left text-4xl font-bold text-white md:text-6xl"
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
						{project.description}
						Ladakh Tempo Union - Biggest tourist tempo provider in ladakh.
					</motion.p>
					<section className="flex w-1/2">
						<section className="flex flex-col gap-2 text-white">
							<span>Project Type</span>
							<span> UI/UX Design</span>
						</section>
						<section className="flex flex-col"></section>
					</section>
				</section>
				<section></section>
			</section>
		</section>
	);
};

export default ProjectAbout;
