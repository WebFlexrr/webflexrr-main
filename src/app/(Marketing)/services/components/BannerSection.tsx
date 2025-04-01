"use client";
import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface BannerSection {
	image?: string;
	alt?: string;
	title?: string;
	description?: string;
}

const BannerSection: FC<BannerSection> = ({
	image,
	alt,
	title,
	description,
}) => {
	return (
		<section className="relative h-[60vh] w-full">
			<Image
				src={image || ""}
				alt={alt || ""}
				fill
				className="object-cover"
				priority
			/>
			<div className="absolute inset-0 bg-black/50" />
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-center">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-4xl font-bold text-white md:text-6xl"
					>
						{title}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-6 text-lg text-gray-200 md:text-xl"
					>
						{description}
					</motion.p>
				</div>
			</div>
		</section>
	);
};

export default BannerSection;
