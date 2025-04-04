"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown, MdPlayArrow } from "react-icons/md";

interface ProjectHeroProps {
	project: {
		title?: string;
		description?: string;
		tags?: string[];
	};
}

export const ProjectHero = ({ project }: ProjectHeroProps) => {
	return (
		<section className="relative px-4 pt-44 pb-5 md:px-8">
			<div className="mx-auto max-w-7xl">
				{/* <motion.div
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
				</motion.div> */}
				{/* <div className="absolute inset-0 bg-black/50" /> */}
				{/*<h1>
					 {project.title?.split(" ").map((char,index) => (
						<motion.span
							key={char}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index*10+index }}
							className="text-left text-4xl font-bold text-white md:text-6xl"
						>
							{char}
						</motion.span>
					))} 
						</h1>*/}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					className="text-left text-4xl font-bold text-white md:text-6xl"
				>
					{project.title}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					className="mt-3 w-1/2 text-lg md:text-xl"
				>
					{/* {project.description} */}
					App for biggest Tourist Tempo company of ladakh to manage their
					bookings and drivers.
				</motion.p>
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					className="mt-10 flex w-1/2 gap-4"
				>
					{project.tags?.map((tag) => (
						<span
							key={tag}
							className="bg-primary/[0.2] text-primary w-fit rounded-full px-5 py-1.5 text-sm font-bold backdrop-blur-lg"
						>
							{tag}
						</span>
					))}
				</motion.section>
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-28 flex w-full gap-4"
				>
					<div className="from-primary/70 to-primary/10 shadow-primary/40 flex w-fit items-center gap-2 rounded-full bg-gradient-to-l px-10 py-3 font-semibold text-white shadow-xl transition-all duration-500 ease-in-out hover:scale-105">
						<MdPlayArrow className="text-2xl" />
						View Our Live App
					</div>
					<div className="flex w-fit items-center gap-2 rounded-full border border-white/70 px-10 py-3 font-semibold text-white">
						<MdKeyboardDoubleArrowDown className="text-2xl" />
						Explore Project
					</div>
				</motion.section>
			</div>
		</section>
	);
};
