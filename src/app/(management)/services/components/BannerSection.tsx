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

const BannerSection: FC<BannerSection> = ({ image, alt }) => {
	return (
		<section className="dark relative flex h-auto w-full flex-col">
			<section className="w-full px-5 py-20 md:px-8">
				<div className="mx-auto max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="overflow-hidden rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"
					>
						{image && (
							<Image
								src={image}
								alt={alt || "Service thumbnail"}
								width={1920}
								height={1080}
								className="w-full"
							/>
						)}
					</motion.div>
				</div>
			</section>
		</section>
		// <section className="relative h-[60vh] w-full">
		// 	<Image
		// 		src={image || ""}
		// 		alt={alt || ""}
		// 		fill
		// 		className="object-cover"
		// 		priority
		// 	/>
		// 	<div className="absolute inset-0 bg-black/50" />
		// 	<div className="absolute inset-0 flex items-center justify-center">
		// 		<div className="text-center">
		// 			<motion.h1
		// 				initial={{ opacity: 0, y: 20 }}
		// 				animate={{ opacity: 1, y: 0 }}
		// 				transition={{ duration: 0.5 }}
		// 				className="text-4xl font-bold text-white md:text-6xl"
		// 			>
		// 				{title}
		// 			</motion.h1>
		// 			<motion.p
		// 				initial={{ opacity: 0, y: 20 }}
		// 				animate={{ opacity: 1, y: 0 }}
		// 				transition={{ duration: 0.5, delay: 0.2 }}
		// 				className="mt-6 text-lg text-gray-200 md:text-xl"
		// 			>
		// 				{description}
		// 			</motion.p>
		// 		</div>
		// 	</div>
		// </section>
	);
};

export default BannerSection;
