"use client";
import { motion } from "framer-motion";

const categories = [
	"All",
	"Web Development",
	"Mobile Apps",
	"UI/UX Design",
	"E-commerce",
	"AI/ML",
];

export function FilterCategories() {
	return (
		<section className="relative px-4 py-12 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-wrap items-center justify-center gap-4"
				>
					{categories.map((category) => (
						<button
							key={category}
							className="rounded-full border border-white/[0.05] bg-[#0A0A0B]/70 px-6 py-2 text-sm text-white backdrop-blur-xl transition-all hover:border-white/[0.1] hover:bg-white/[0.05]"
						>
							{category}
						</button>
					))}
				</motion.div>
			</div>
		</section>
	);
}
