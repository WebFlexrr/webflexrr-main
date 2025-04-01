"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			className="absolute top-8 left-4 md:left-8"
		>
			<Link
				href="/works"
				className="inline-flex items-center rounded-full bg-white/[0.05] px-4 py-2 text-sm text-white backdrop-blur-xl transition-colors hover:bg-white/[0.1]"
			>
				<ArrowLeft className="mr-2 h-4 w-4" />
				Back to Projects
			</Link>
		</motion.div>
	);
};
