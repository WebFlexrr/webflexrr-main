"use client";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export const CallToActionButton = () => {
	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{ scale: 0.95, opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			whileTap={{ scale: 0.8 }}
		>
			<Link
				href={process.env.NEXT_PUBLIC_MEETING_LINK!}
				className="group cursor-pointer transition-all duration-500 ease-in-out"
			>
				{/* <Button className="border-secondary from-primary to-secondary font-space-grotesk gap-5 rounded-2xl border bg-linear-to-r px-5 py-6 text-lg text-white"> */}
				<Button className="border-secondary hover:bg-secondary bg-primary font-space-grotesk gap-5 rounded-full border px-5 py-6 text-lg text-white transition-all duration-300 ease-in-out">
					Book A Free Consultation{" "}
					<div className="flex items-center justify-center rounded-md border border-white p-2">
						<CiLocationArrow1 className="fill-white text-lg" />
					</div>
				</Button>
			</Link>
		</motion.div>
	);
};

export const ContactUsButton = () => {
	return (
		<motion.div
			initial={{ scale: 1 }}
			whileHover={{ scale: 0.95, opacity: 1 }}
			transition={{
				duration: 0.3,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			whileTap={{ scale: 0.9 }}
		>
			<Link
				href={process.env.NEXT_PUBLIC_MEETING_LINK!}
				className="hidden md:flex"
			>
				{/* <Button className="border-secondary from-primary to-secondary font-space-grotesk flex h-10 items-center justify-center gap-5 rounded-2xl border bg-linear-to-r text-base text-white"> */}
				<Button className="border-secondary bg-secondary font-space-grotesk flex h-10 items-center justify-center gap-5 rounded-2xl border text-base text-white transition-all duration-500">
					Book free Consultation
				</Button>
			</Link>
		</motion.div>
	);
};
