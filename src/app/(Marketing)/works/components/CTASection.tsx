"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
	return (
		<section className="dark bg-background relative px-4 py-32 md:px-8">
			<div className="mx-auto grid max-w-5xl grid-cols-3 rounded-3xl border border-white/25 bg-[#0A0A0B]/70 p-12 text-center backdrop-blur-xl">
				<section className="col-span-2 w-full text-left">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-4 text-left text-3xl font-bold text-white md:text-5xl"
					>
						Have a Project in Mind?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="mb-8 text-lg text-gray-400"
					>
						Let's collaborate to bring your vision to life with our expertise in
						digital solutions.
					</motion.p>
				</section>
				<section className="flex w-full items-center justify-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<Link
							href="/contact"
							className="from-primary to-secondary inline-flex items-center rounded-full bg-gradient-to-r px-8 py-3 text-lg font-medium text-white transition-all hover:from-blue-600 hover:to-purple-600"
						>
							Start a Project
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</motion.div>
				</section>
			</div>
		</section>
	);
}
