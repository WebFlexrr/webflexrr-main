"use client";
import React from "react";
import { motion } from "motion/react";
import { Brush } from "lucide-react";

const ProjectFeatures = () => {
	return (
		<section className="relative w-full px-5 py-20 md:py-40">
			<section className="z-20 mx-auto grid w-full max-w-[90rem] grid-cols-2 gap-6 px-5">
				<section className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
						className="flex w-full flex-col items-start space-y-2"
					>
						<div className="flex gap-3 rounded-full">
							<div className="bg-background border-secondary flex items-center gap-3 rounded-full border px-7 py-3 text-base">
								<div className="relative h-2 w-2 rounded-full">
									<span className="bg-primary absolute h-2.5 w-2.5 animate-ping rounded-full"></span>
								</div>
								Problem Solving
							</div>
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
						<div className="flex w-full gap-5">
							<section>
								<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1.5">
									<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
										<Brush />
									</div>
								</div>
							</section>
							<section className="">
								<p className="text-base">
									Integration with Financial Systems: Integrating with various
									financial systems for processing investments and returns
									securely and efficiently.
								</p>
							</section>
						</div>
						<div className="flex w-full gap-5">
							<section>
								<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1.5">
									<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
										<Brush />
									</div>
								</div>
							</section>
							<section className="">
								<p className="text-base">
									Integration with Financial Systems: Integrating with various
									financial systems for processing investments and returns
									securely and efficiently.
								</p>
							</section>
						</div>
						<div className="flex w-full gap-5">
							<section>
								<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1.5">
									<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
										<Brush />
									</div>
								</div>
							</section>
							<section className="">
								<p className="text-base">
									Integration with Financial Systems: Integrating with various
									financial systems for processing investments and returns
									securely and efficiently.
								</p>
							</section>
						</div>
					</section>
				</section>
				<section className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
						className="flex w-full flex-col items-start space-y-2"
					>
						<div className="flex gap-3 rounded-full">
							<div className="bg-background border-secondary flex items-center gap-3 rounded-full border px-7 py-3 text-base">
								<div className="relative h-2 w-2 rounded-full">
									<span className="bg-primary absolute h-2.5 w-2.5 animate-ping rounded-full"></span>
									{/* <span className="h-2 w-2 animate-ping  rounded-full bg-green-500"></span> */}
								</div>
								Key Capabilities
							</div>
						</div>
						<h2 className="text-4xl font-bold text-black dark:text-white">
							Innovative Features
						</h2>
					</motion.div>

					{/* <div className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 md:grid-cols-4 lg:max-w-4xl lg:grid-cols-5"></div> */}
					<section className="mt-10 flex w-full flex-col gap-6">
						<div className="flex w-full gap-5">
							<section>
								<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1.5">
									<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
										<Brush />
									</div>
								</div>
							</section>
							<section className="">
								<p className="text-base">
									Investment Tracking: Allows users to track their agricultural
									investments in real-time.
								</p>
							</section>
						</div>
						<div className="flex w-full gap-5">
							<section>
								<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1.5">
									<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
										<Brush />
									</div>
								</div>
							</section>
							<section className="">
								<p className="text-base">
									Marketplace for Organic Products: Provides a marketplace for
									buying and selling 100% organic products.
								</p>
							</section>
						</div>
						<div className="flex w-full gap-5">
							<section>
								<div className="bg-secondary/90 flex h-14 w-14 items-center justify-center rounded-xl p-1.5">
									<div className="bg-primary flex h-full w-full items-center justify-center rounded-lg text-white">
										<Brush />
									</div>
								</div>
							</section>
							<section className="">
								<p className="text-base">
									Community Features: Enables users to join a community of
									investors and farmers for sharing knowledge and experiences.
								</p>
							</section>
						</div>
					</section>
				</section>
			</section>
		</section>
	);
};

export default ProjectFeatures;
