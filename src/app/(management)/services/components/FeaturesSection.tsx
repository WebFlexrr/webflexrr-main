"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeaturesSection {
	features?: string[];
}
const FeaturesSection: FC<FeaturesSection> = ({ features }) => {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 text-3xl font-bold text-white"
				>
					What We Offer
				</motion.h2>
				<div className="grid gap-6 md:grid-cols-2">
					{features?.map((feature, index) => (
						<motion.div
							key={feature}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="flex items-center rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 p-6 backdrop-blur-xl"
						>
							<CheckCircle2 className="mr-4 h-6 w-6 text-blue-400" />
							<span className="text-white">{feature}</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
