"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ProjectCTA = () => {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="rounded-3xl border border-white/[0.05] bg-[#0A0A0B]/70 p-12 text-center backdrop-blur-xl">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-4 text-3xl font-bold text-white"
					>
						Ready to Start Your Project?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="mb-8 text-gray-400"
					>
						Let's create something amazing together. Contact us to discuss your
						project requirements.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<Link
							href="/contact"
							className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-lg font-medium text-white transition-all hover:from-blue-600 hover:to-purple-600"
						>
							Start a Project
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
