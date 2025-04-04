"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProjectGalleryProps {
	gallery: SanityImageSource[];
}

export const ProjectGallery = ({ gallery }: ProjectGalleryProps) => {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 text-3xl font-bold text-white"
				>
					Project Gallery
				</motion.h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{gallery.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0A0A0B]/70 backdrop-blur-xl"
						>
							<Image
								src={imageUrlFor(image).url()}
								alt={`Project image ${index + 1}`}
								width={600}
								height={400}
								className="w-full"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
