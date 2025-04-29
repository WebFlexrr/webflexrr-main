"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
	title: string;
	description: string[];
}
const AboutSection: FC<AboutSectionProps> = ({ title, description }) => {
	return (
		<section className="bg-background dark w-full">
			<section className="z-10 mx-auto flex max-w-5xl flex-col items-start px-5 text-center lg:px-0">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-left text-3xl font-bold text-white md:text-5xl lg:mt-10 lg:text-5xl"
				>
					{title} Excellence at Webflexrr
				</motion.h2>
				<section className="flex w-full flex-col gap-2">
					{description.map((description) => (
						<motion.p
							key={description}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mt-6 text-left text-base text-gray-300 md:text-xl"
						>
							{description}
						</motion.p>
					))}
				</section>
			</section>
		</section>
	);
};

export default AboutSection;
