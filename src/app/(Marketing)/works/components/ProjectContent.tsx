"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ExecutionPhase {
	phase: string;
	description: string;
	tasks: string[];
	image: string;
}

interface ProjectContentProps {
	project: {
		content?: Array<{
			children?: Array<{
				marks?: Array<string>;
				text?: string;
				_type: "span";
				_key: string;
			}>;
			style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
			listItem?: "bullet" | "number";
			markDefs?: Array<{
				href?: string;
				_type: "link";
				_key: string;
			}>;
			level?: number;
			_type: "block";
			_key: string;
		}>;
		techStack?: string[];
	};
	executionProcess: ExecutionPhase[];
}

export const ProjectContent = ({
	project,
	executionProcess,
}: ProjectContentProps) => {
	return (
		<>
			<section className="relative px-4 py-20 md:px-8">
				<div className="mx-auto max-w-7xl">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-8 text-3xl font-bold text-white"
					>
						About the Project
					</motion.h2>
					<div className="grid gap-12 md:grid-cols-2">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="space-y-6 text-gray-400"
						>
							{project.content?.map((block, index) => (
								<p key={block._key || index}>{block.children?.[0]?.text}</p>
							))}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="space-y-6"
						>
							<div className="rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 p-6 backdrop-blur-xl">
								<h3 className="mb-4 text-xl font-semibold text-white">
									Tech Stack
								</h3>
								<div className="flex flex-wrap gap-3">
									{project.techStack?.map((tech: string) => (
										<span
											key={tech}
											className="rounded-full bg-white/[0.05] px-4 py-1 text-sm text-gray-400"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="relative px-4 py-20 md:px-8">
				<div className="mx-auto max-w-7xl">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-12 text-3xl font-bold text-white"
					>
						Execution Process
					</motion.h2>
					<div className="grid gap-8 md:grid-cols-2">
						{executionProcess.map((phase, index) => (
							<motion.div
								key={phase.phase}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"
							>
								<div className="relative h-48 w-full overflow-hidden">
									<Image
										src={phase.image}
										alt={phase.phase}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-black/50" />
								</div>
								<div className="p-6">
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-2xl font-bold text-blue-400">
										{index + 1}
									</div>
									<h3 className="mb-2 text-xl font-semibold text-white">
										{phase.phase}
									</h3>
									<p className="mb-4 text-gray-400">{phase.description}</p>
									<ul className="space-y-2">
										{phase.tasks.map((task) => (
											<li
												key={task}
												className="flex items-center text-gray-400"
											>
												<CheckCircle2 className="mr-2 h-4 w-4 text-blue-400" />
												{task}
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
