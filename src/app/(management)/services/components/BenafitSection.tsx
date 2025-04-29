"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface BenefitSectionProps {
	benefits?: string[];
}

const BenefitSection: FC<BenefitSectionProps> = ({ benefits }) => {
	return (
		<section className="bg-background dark relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 text-3xl font-bold text-white"
				>
					Benefits
				</motion.h2>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{benefits?.map((benefit, index) => (
						<motion.div
							key={benefit}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 p-6 backdrop-blur-xl"
						>
							<span className="text-white">{benefit}</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitSection;
