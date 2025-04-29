"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectBannerProps {
	title?: string;
	thumbnail?: string;
	clientName?: string;
	category?: string;
	timeline?: string;
	budget?: string;
}

export const ProjectBanner = ({
	title,
	thumbnail,
	clientName,
	category,
	timeline,
	budget,
}: ProjectBannerProps) => {
	return (
		<section className="dark relative flex h-fit w-full flex-col">
			<div className="bg-background absolute -z-10 h-full w-full"></div>
			<section className="w-full px-5 py-20 md:px-5">
				<div className="mx-auto max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="overflow-hidden rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"
					>
						{thumbnail && (
							<Image
								src={thumbnail}
								alt={title || "Project thumbnail"}
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
						className="grid w-full grid-cols-2 gap-5 py-10 text-white md:grid-cols-2 lg:grid-cols-4"
					>
						<section className="flex w-full flex-col border-r border-white">
							<div className="mx-auto flex w-fit flex-col items-start gap-4">
								<h5>Client Name</h5>
								<div className="text-lg">{clientName}</div>
							</div>
						</section>
						<section className="flex w-full flex-col border-white lg:border-r">
							<div className="mx-auto flex w-fit flex-col items-start gap-4">
								<h5>Project Category</h5>
								<div className="text-lg">{category}</div>
							</div>
						</section>
						<section className="flex w-full flex-col border-r border-white">
							<div className="mx-auto flex w-fit flex-col items-start gap-4">
								<h5>Project Timeline</h5>
								<div className="text-lg">{timeline}</div>
							</div>
						</section>
						<section className="flex w-full flex-col">
							<div className="mx-auto flex w-fit flex-col items-start gap-4">
								<h5>Project Budget</h5>
								<div className="text-lg">{budget}</div>
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
		</section>
	);
};
