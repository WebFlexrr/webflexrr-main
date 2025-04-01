"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
	title: string;
	description: string;
}

const HeroSection: FC<HeroSectionProps> = ({ title, description }) => {
	return (
		<section className="relative px-4 pt-32 md:px-8">
			<div className="mx-auto flex max-w-5xl flex-col items-center text-center">
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
					className="mt-6 max-w-4xl text-lg text-gray-400 md:text-xl"
				>
					{description}
				</motion.p>
			</div>
		</section>
	);
};

export default HeroSection;
