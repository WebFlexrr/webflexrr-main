"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProjectBannerProps {
	project: {
		title?: string;
		thumbnail?: SanityImageSource;
		clientName?: string;
		category?: string;
		timeline?: string;
		budget?: string;
	};
}

export const ProjectBanner = ({ project }: ProjectBannerProps) => {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="overflow-hidden rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"
				>
					{project.thumbnail && (
						<Image
							src={imageUrlFor(project.thumbnail).url()}
							alt={project.title || "Project thumbnail"}
							width={1920}
							height={1080}
							className="w-full"
						/>
					)}
				</motion.div>
			</div>
			<div className="mx-auto max-w-7xl">
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="grid w-full grid-cols-4 py-10 text-white"
				>
					<section className="flex w-full flex-col border-r border-white">
						<div className="mx-auto flex w-fit flex-col items-start gap-4">
							<h5>Client Name</h5>
							<div className="text-lg">{project.clientName}</div>
						</div>
					</section>
					<section className="flex w-full flex-col border-r border-white">
						<div className="mx-auto flex w-fit flex-col items-start gap-4">
							<h5>Project Category</h5>
							<div className="text-lg">{project.category}</div>
						</div>
					</section>
					<section className="flex w-full flex-col border-r border-white">
						<div className="mx-auto flex w-fit flex-col items-start gap-4">
							<h5>Project Timeline</h5>
							<div className="text-lg">{project.timeline}</div>
						</div>
					</section>
					<section className="flex w-full flex-col">
						<div className="mx-auto flex w-fit flex-col items-start gap-4">
							<h5>Project Budget</h5>
							<div className="text-lg">{project.budget}</div>
						</div>
					</section>
				</motion.section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className="w-full"
				>
					{/* <Separator className="bg-white" /> */}
				</motion.div>
			</div>
		</section>
	);
};
