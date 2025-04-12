"use client";
import React from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { Paintbrush } from "lucide-react";

const ProjectFeatures = () => {
	return (
		<section className="relative w-full px-5 py-20 md:py-20">
			{/* <motion.div
				className={`bg-secondary/60 absolute right-1/4 bottom-1/4 left-1/4 z-0 h-40 w-1/2 bg-gradient-to-b blur-3xl`}
			/> */}
			<section className="z-20 mx-auto w-full max-w-7xl px-5">
				<section className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
					>
						<SectionHeading
							heading="Technologies Used"
							subHeading="Tech stack"
							para="We carefully selected cutting-edge technologies to build a robust, scalable, and high-performance solution."
						/>
					</motion.div>

					<section className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-1 gap-6">
						<section className="flex w-full">
							<section className="h-6 w-6 rounded-lg">
								<Paintbrush />
							</section>
							<section className="w-full"></section>
						</section>
					</section>
				</section>
				<section></section>
			</section>
		</section>
	);
};

export default ProjectFeatures;
