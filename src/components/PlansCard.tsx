"use client";
import React, { type FC } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";

interface PlansCardProps {
	type: string;
	title: string;
	price: number;
	description: string;
	lists: string[];
	index?: number;
}

const PlansCard: FC<PlansCardProps> = ({
	type,
	title,
	price,
	description,
	lists,
	index = 0,
}): React.JSX.Element => {
	const isRecommended = type === "Recommended";

	const getCardStyles = () => {
		switch (type) {
			case "Basic":
				return {
					gradient: "bg-gradient-to-b from-[#1a1f35] to-[#0c1322]",
					iconColor: "text-blue-400",
					border: "border-blue-900/50",
					button: "bg-[#1E293B] hover:bg-[#1E293B]/80",
				};
			case "Recommended":
				return {
					gradient: "bg-gradient-to-b from-[#2d1a4d] to-[#1a1035]",
					iconColor: "text-purple-400",
					border: "border-purple-900/50",
					button: "bg-gradient-to-r from-purple-500 to-purple-700",
				};
			case "Advanced":
				return {
					gradient: "bg-gradient-to-b from-[#3d1a35] to-[#1a0f22]",
					iconColor: "text-pink-400",
					border: "border-pink-900/50",
					button: "bg-[#3d1a35] hover:bg-[#3d1a35]/80",
				};
			default:
				return {
					gradient: "bg-gradient-to-b from-gray-900 to-gray-950",
					iconColor: "text-gray-400",
					border: "border-gray-800",
					button: "bg-gray-800 hover:bg-gray-700",
				};
		}
	};

	const styles = getCardStyles();

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.5,
				delay: index * 0.2,
				type: "tween",
				ease: "easeOut",
			}}
		>
			<Card
				className={`group relative overflow-hidden rounded-3xl border ${styles.border} backdrop-blur-xl ${isRecommended ? "z-10 lg:scale-110" : ""}`}
			>
				{/* Gradient Background */}
				<div className={`absolute inset-0 ${styles.gradient}`} />

				{/* Noise Texture */}
				<div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />

				{/* Content */}
				<CardHeader className="relative z-10 flex w-full flex-col items-start justify-center p-6 text-white">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.1 }}
						className="w-full"
					>
						{isRecommended && (
							<span className="mb-4 inline-block rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-lg">
								Popular
							</span>
						)}
						<h4 className="text-2xl font-bold text-white">{title}</h4>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.2 }}
						className="mt-2 w-full"
					>
						<span className="flex items-baseline gap-1 text-3xl font-medium text-white">
							${price}
							<span className="text-base text-gray-400">/mo</span>
						</span>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.3 }}
						className="mt-3 w-full text-left text-sm text-gray-400"
					>
						{description}
					</motion.p>
				</CardHeader>

				<Separator className="bg-white/[0.08]" />

				<CardContent className="relative z-10 p-6">
					<ul className="flex flex-col gap-4">
						{lists.map((list, idx) => (
							<motion.li
								key={list}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
								className="flex items-center gap-3"
							>
								<span
									className={`flex h-5 w-5 items-center justify-center rounded-full ${styles.button} bg-opacity-50`}
								>
									<Check size={12} className={styles.iconColor} />
								</span>
								<span className="text-sm text-gray-300">{list}</span>
							</motion.li>
						))}
					</ul>
				</CardContent>

				<CardFooter className="relative z-10 p-6 pt-0">
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
						className="w-full"
					>
						<Link
							href={""}
							className={`flex w-full items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium transition-all hover:gap-3 ${styles.button} text-white`}
						>
							Get started
						</Link>
					</motion.div>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export default PlansCard;
