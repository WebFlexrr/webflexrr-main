"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
	thumbnail?: string;
	title?: string;
	description?: string;
	link?: string;
	index?: number;
	tags?: string[];
	slug?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	thumbnail = "",
	title,
	description,
	link,
	tags,
	slug,
	index = 0,
}) => {
	return (
		<Link href={`/works/${slug}`}>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.2,
					type: "tween",
					ease: "easeOut",
				}}
			>
				{/* <Card className="mx-auto h-fit w-full max-w-4xl border border-white overflow-hidden rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"> */}
				<Card className="mx-auto h-fit w-full max-w-4xl overflow-hidden rounded-3xl border-none bg-transparent pt-0 shadow-none">
					{/* <div className="from-primary/10 to-secondary/10 absolute inset-0 bg-gradient-to-br via-transparent" /> */}
					<CardHeader className="rounded-lg p-0">
						<motion.section
							className="w-full"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.2 }}
						>
							<Image
								alt={title ?? ""}
								className="aspect-4/3 w-full rounded-2xl object-cover shadow-lg ring-1 ring-white/10"
								src={thumbnail}
								width={1000}
								height={0}
							/>
						</motion.section>
					</CardHeader>
					<CardContent className="relative z-10 h-full w-full lg:px-5">
						<section className="flex h-full w-full flex-col items-stretch justify-between gap-7">
							<section className="flex flex-col gap-4">
								{tags && (
									<motion.section
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: 0.4 }}
										className="flex w-full flex-wrap gap-3"
									>
										{tags.map((tag) => (
											<span
												key={tag}
												className="w-fit rounded-full bg-white/[0.05] px-3 py-1.5 text-sm backdrop-blur-lg"
											>
												{tag}
											</span>
										))}

										{/* <span className="w-fit rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm text-blue-400 backdrop-blur-lg">
										Business
										</span> */}
									</motion.section>
								)}
							</section>
							<section className="flex flex-col items-start gap-3">
								<motion.h5
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.2 }}
									className="text-left font-semibold text-white"
								>
									{title}
								</motion.h5>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.3 }}
									className="text-sm text-gray-400"
								>
									{description}
								</motion.p>
							</section>
							<section className="flex flex-col gap-4">
								{/* {tags && (
										<motion.section
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.3, delay: 0.4 }}
											className="flex w-full gap-3"
										>
											{tags.map((tag) => (
												<span
													key={tag}
													className="w-fit rounded-full bg-white/[0.05] px-3 py-1.5 text-sm backdrop-blur-lg"
												>
													{tag}
												</span>
											))}

											{/* <span className="w-fit rounded-lg bg-blue-500/10 px-3 py-1.5 text-sm text-blue-400 backdrop-blur-lg">
										Business
										</span> 
										</motion.section>
									)} */}
								{link && (
									<motion.div
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.2 }}
									>
										<Link
											// href={`/works/${slug}`}
											href={link}
											className="from-primary to-secondary flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r p-3 text-sm font-medium text-white transition-all hover:gap-3"
										>
											View Project <MdOutlineArrowOutward size={20} />
										</Link>
									</motion.div>
								)}
							</section>
						</section>
					</CardContent>
				</Card>
			</motion.div>
		</Link>
	);
};

export default ProjectCard;
