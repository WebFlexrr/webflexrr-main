"use client";
import React, { FC, JSX } from "react";
import { motion } from "framer-motion";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

interface OffersSection {
	offers?: Array<{ title: string; description: string; icon: JSX.Element }>;
}
const OffersSection: FC<OffersSection> = ({ offers }) => {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 flex justify-center gap-2 font-bold text-white"
				>
					What We <span className="text-secondary">Offer</span>
				</motion.h2>
				<div className="grid gap-6 md:grid-cols-3">
					{offers?.map((offer, index) => (
						<motion.div
							key={offer.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="w-full"
						>
							<Card
								key={offer.title}
								className="hover:border-primary/70 h-full w-full bg-[#0A0A0B]/70 backdrop-blur-xl"
							>
								<CardHeader className="flex flex-col gap-2">
									<div className="text-secondary flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
										{offer.icon}
									</div>
									<CardHeader className="mt-2 p-0">
										<h5 className="text-left">{offer.title}</h5>
									</CardHeader>
									<CardDescription>{offer.description}</CardDescription>
								</CardHeader>

								<CardFooter></CardFooter>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OffersSection;
