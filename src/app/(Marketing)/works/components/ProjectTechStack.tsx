"use client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React, { FC } from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { FaAws, FaFlutter, FaNodeJs, FaReact } from "react-icons/fa6";
import { SiFirebase, SiMongodb } from "react-icons/si";

interface ProjectTechStackProps {
	project: {
		title?: string;
		thumbnail?: SanityImageSource;
		clientName?: string;
		category?: string;
		timeline?: string;
		budget?: string;
	};
}

const tech = [
	{
		name: "Flutter",
		icon: <FaFlutter className="text-4xl" />,
	},
	{
		name: "Node.js",
		icon: <FaNodeJs className="text-4xl" />,
	},
	{
		name: "Firebase",
		icon: <SiFirebase className="text-4xl" />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb className="text-4xl" />,
	},
	{
		name: "AWS",
		icon: <FaAws className="text-4xl" />,
	},
	{
		name: "React.Js",
		icon: <FaReact className="text-4xl" />,
	},
];

const ProjectTechStack: FC<ProjectTechStackProps> = () => {
	return (
		<section className="relative w-full py-20 md:py-20">
			<motion.div
				className={`bg-secondary/60 absolute right-1/4 bottom-1/4 left-1/4 z-0 h-40 w-1/2 bg-gradient-to-b blur-3xl`}
			/>
			<section className="z-20 mx-auto w-full max-w-7xl px-5">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
				>
					<SectionHeading
						heading="Technologies Used"
						subHeading="Our Services"
						para="We carefully selected cutting-edge technologies to build a robust, scalable, and high-performance solution."
					/>
				</motion.div>

				<div className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-2 gap-6 md:grid-cols-4 lg:max-w-4xl lg:grid-cols-5">
					{tech.map((tech, index) => (
						<motion.div
							key={tech.name}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.2,
								type: "tween",
								ease: "easeOut",
							}}
							className="border-secondary/35 z-10 w-full rounded-2xl border"
						>
							<div className="group bg-background border-secondary/35 shadow-secondary z-10 flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-2xl border text-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-110">
								<div>{tech.icon}</div>
								<div className="text-slate-200">{tech.name}</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</section>
	);
};

export default ProjectTechStack;
