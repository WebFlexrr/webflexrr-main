"use client";
import React, { type FC } from "react";
import { motion } from "motion/react";
interface HeadingProps {
	heading: string | null;
	subHeading: string;
	para?: string;
	align?: "left" | "center" | "right";
}

const SectionHeading: FC<HeadingProps> = ({
	heading,
	subHeading,
	para,
	align = "center",
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
			className={` ${align === "left" && "items-start"} ${align === "center" && "items-center"} ${align === "right" && "items-end"} mx-auto mt-10 flex h-auto w-full max-w-7xl flex-col gap-4 text-center text-black dark:text-white`}
		>
			{heading != null ? (
				<>
					{/* <span className="text-primary flex gap-3 text-xl font-semibold">
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400">
						<Star size={22} className="fill-background text-green-400" />
						</span>
						{heading}
						</span> */}
					{/* <span className="from-primary to-secondary flex gap-3 rounded-full bg-gradient-to-r p-0.5"> */}
					<span className="flex gap-3 rounded-full p-0.5">
						<div className="bg-background border-secondary rounded-full border px-7 py-3 text-base">
							{subHeading}
						</div>
					</span>
					<h2 className="text-5xl font-bold text-black dark:text-white">
						{heading}
					</h2>

					<p className="w-full max-w-lg">{para}</p>
				</>
			) : (
				<h2 className="">{heading}</h2>
			)}
		</motion.div>
	);
};

export default SectionHeading;
