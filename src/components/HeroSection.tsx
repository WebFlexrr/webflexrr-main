"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
	pillText: string;
	title: string;

	tagline?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ pillText, title, tagline }) => {
	return (
		<section className="dark relative flex h-auto w-full flex-col items-center justify-center pt-20 lg:pt-25">
			<div className="bg-background absolute -z-10 h-full w-full"></div>
			<div
				className={cn(
					"absolute inset-0 z-0",
					"[background-size:60px_60px]",
					// "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					// "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
					"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
				)}
			/>
			{/* Radial gradient for the container to give a faded look */}
			<section className="z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center md:px-8">
				<motion.span
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
					className="flex gap-3 rounded-full p-0.5"
				>
					<div className="bg-background border-secondary flex items-center gap-5 rounded-full border px-6 py-2.5 text-lg text-white lg:px-7 lg:py-3 lg:text-xl">
						<div className="relative h-2 w-2 rounded-full">
							<span className="bg-primary absolute h-2.5 w-2.5 animate-ping rounded-full"></span>
						</div>
						{pillText}
					</div>
				</motion.span>
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
					className="mt-4 text-center text-3xl font-bold text-white md:text-5xl lg:mt-10 lg:text-6xl"
				>
					{title}
				</motion.h1>
				{tagline && (
					<motion.p
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
						className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
					>
						{tagline}
					</motion.p>
				)}
			</section>
		</section>
	);
};

export default HeroSection;
