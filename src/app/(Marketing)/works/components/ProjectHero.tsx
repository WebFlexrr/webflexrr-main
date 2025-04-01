"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectHeroProps {
	project: {
		title?: string;
		description?: string;
		tags?: string[];
	};
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
	return (
		<section className="relative px-4 pt-32 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-8 flex flex-wrap gap-3"
				>
					{project.tags?.map((tag: string) => (
						<span
							key={tag}
							className="rounded-full bg-white/[0.05] px-4 py-1 text-sm text-blue-400 backdrop-blur-xl"
						>
							{tag}
						</span>
					))}
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="text-4xl font-bold text-white md:text-6xl"
				>
					{project.title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-6 text-lg text-gray-400 md:text-xl"
				>
					{project.description}
				</motion.p>
			</div>
		</section>
	);
};
