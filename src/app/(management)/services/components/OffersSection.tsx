"use client";
import React, { FC, JSX } from "react";
import { motion } from "framer-motion";

interface OffersSection {
	offers?: Array<{ title: string; description: string; icon: JSX.Element }>;
}
const OffersSection: FC<OffersSection> = ({ offers }) => {
	return (
		<section className="bg-background dark relative px-4 py-20 md:px-8">
			<section className="mx-auto max-w-5xl">
				<ul className={`grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2`}>
					{offers?.map((offer, index) => (
						<motion.li
							key={offer.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="flex w-full gap-4 text-lg text-white/90"
						>
							<div>
								<div className="text-primary flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-sm">
									{offer.icon}
								</div>
							</div>
							<div>
								{offer.title}:{" "}
								<span className="text-white/50">{offer.description}</span>
							</div>
						</motion.li>
					))}
				</ul>
			</section>
		</section>
	);
};

export default OffersSection;
