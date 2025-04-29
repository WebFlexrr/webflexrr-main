import React from "react";
import { motion } from "motion/react";

const WhyChooseUsSection = () => {
	const whyChooseUs = [
		{
			title: "Expert Team",
			description: "Skilled professionals with years of industry experience.",
		},
		{
			title: "Modern Technologies",
			description: "Using the latest tools and frameworks for optimal results.",
		},
		{
			title: "Agile Development",
			description: "Flexible and iterative approach to project management.",
		},
		{
			title: "Quality Assurance",
			description: "Rigorous testing and quality control processes.",
		},
	];

	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
				>
					Why Choose Us
				</motion.h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{whyChooseUs.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 p-6 backdrop-blur-xl"
						>
							<h3 className="mb-2 text-xl font-semibold text-white">
								{item.title}
							</h3>
							<p className="text-gray-400">{item.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUsSection;
