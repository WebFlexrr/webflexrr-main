"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProcessSectionProps {
	process?: {
		title: string;
		description: string;
		image: string;
	}[];
}

const ProcessSection: FC<ProcessSectionProps> = ({ process }) => {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 text-3xl font-bold text-white"
				>
					Our Process
				</motion.h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{process?.map((step, index) => (
						<motion.div
							key={step.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"
						>
							<div className="relative h-48 w-full overflow-hidden">
								<Image
									src={step.image}
									alt={step.title}
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
									{step.title}
								</h3>
								<p className="text-gray-400">{step.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
