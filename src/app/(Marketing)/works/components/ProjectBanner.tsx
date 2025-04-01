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
	};
}

export const ProjectBanner = ({ project }: ProjectBannerProps) => {
	return (
		<section className="relative px-4 py-12 md:px-8">
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
		</section>
	);
};
