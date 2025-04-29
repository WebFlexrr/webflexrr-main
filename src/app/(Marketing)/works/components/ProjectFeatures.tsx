"use client";
import React, { FC } from "react";
import { motion } from "motion/react";
import { Brush } from "lucide-react";

interface ProjectFeaturesProps {
	problemSolving?: Array<string>;
	features?: Array<string>;
}
const ProjectFeatures: FC<ProjectFeaturesProps> = ({
	problemSolving,
	features,
}) => {
	return (
		<section className="relative w-full px-5 py-20 md:py-40">
			<section className="z-20 mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-6">
				<section className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
						className="flex w-full flex-col items-center space-y-3 md:items-start"
					>
						<div className="bg-background border-secondary flex items-center gap-3 rounded-full border px-7 py-3 text-base">
							<div className="relative h-2 w-2 rounded-full">
								<span className="bg-primary absolute h-2.5 w-2.5 animate-ping rounded-full"></span>
							</div>
							Problem Solving
						</div>

						<h2 className="text-4xl font-bold text-black dark:text-white">
							Challenges We Overcame
						</h2>

						{/* <p className="w-full max-w-lg">
							We carefully selected cutting-edge technologies to build a robust,
							scalable, and high-performance solution.
						</p> */}
					</motion.div>

					{/* <div className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 md:grid-cols-4 lg:max-w-4xl lg:grid-cols-5"></div> */}
					<section className="mt-10 flex w-full flex-col gap-6">
						{problemSolving?.map((problem, index) => (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								viewport={{ once: true }}
								key={index}
								className="flex w-full gap-5"
							>
								<section>
									<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1">
										<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
											<Brush />
										</div>
									</div>
								</section>
								<section className="">
									<p className="text-base">{problem}</p>
								</section>
							</motion.div>
						))}
					</section>
				</section>
				<section className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
						className="flex w-full flex-col items-center space-y-3 md:items-start"
					>
						<div className="bg-background border-secondary flex items-center gap-3 rounded-full border px-7 py-3 text-base">
							<div className="relative h-2 w-2 rounded-full">
								<span className="bg-primary absolute h-2.5 w-2.5 animate-ping rounded-full"></span>
							</div>
							Key Capabilities
						</div>

						<h2 className="text-4xl font-bold text-black dark:text-white">
							Innovative Features
						</h2>

						{/* <p className="w-full max-w-lg">
							We carefully selected cutting-edge technologies to build a robust,
							scalable, and high-performance solution.
						</p> */}
					</motion.div>
					{/* <div className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 md:grid-cols-4 lg:max-w-4xl lg:grid-cols-5"></div> */}
					<section className="mt-10 flex w-full flex-col gap-6">
						{features?.map((feature, index) => (
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								viewport={{ once: true }}
								key={index}
								className="flex w-full gap-5"
							>
								<section>
									<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1">
										<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
											<Brush />
										</div>
									</div>
								</section>
								<section className="">
									<p className="text-base">{feature}</p>
								</section>
							</motion.div>
						))}
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProjectFeatures;
