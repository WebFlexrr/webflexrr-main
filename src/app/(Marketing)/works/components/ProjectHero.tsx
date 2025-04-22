"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown, MdPlayArrow } from "react-icons/md";
import Link from "next/link";

interface ProjectHeroProps {
	title?: string;
	description?: string;
	tags?: string[];
	projectLink?: string;
}

export const ProjectHero = ({
	title,
	description,
	tags,
	projectLink,
}: ProjectHeroProps) => {
	return (
		<section className="dark relative px-5 pt-44 pb-5 md:px-8">
			<section className="mx-auto w-full max-w-3xl lg:max-w-7xl">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-left text-4xl font-bold text-white md:text-6xl"
				>
					{title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					className="mt-3 w-1/2 text-lg md:text-xl"
				>
					{description}
					{/* App for biggest Tourist Tempo company of ladakh to manage their
					bookings and drivers. */}
				</motion.p>
				<motion.section className="mt-10 flex w-1/2 flex-wrap gap-4">
					{tags?.map((tag) => (
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							key={tag}
							className="bg-primary/[0.2] text-primary w-fit rounded-full px-5 py-1.5 text-sm font-bold backdrop-blur-lg"
						>
							{tag}
						</motion.span>
					))}
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-28 flex w-full flex-col gap-7 lg:flex-row"
				>
					<Link
						href={projectLink || ""}
						className="from-/70 to-primary/10 shadow-primary/40 flex w-fit items-center gap-2 rounded-full bg-gradient-to-l px-10 py-3 font-semibold text-white shadow-xl transition-all duration-500 ease-in-out hover:scale-105"
					>
						<MdPlayArrow className="text-2xl" />
						View Our Live App
					</Link>
					<div className="flex w-fit items-center gap-2 rounded-full border border-white/70 px-10 py-3 font-semibold text-white">
						<MdKeyboardDoubleArrowDown className="text-2xl" />
						Explore Project
					</div>
				</motion.section>
			</section>
		</section>
	);
};
