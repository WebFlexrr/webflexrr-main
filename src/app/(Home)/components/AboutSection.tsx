import React from "react";
import Image from "next/image";
import { CallToActionButton } from "@/components/CallToActionButton";

const AboutSection = () => {
	return (
		<section className="dark relative w-full bg-[#020817] py-20">
			{/* Gradient overlays */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-r opacity-20 blur-3xl" />
				<div className="via-background/10 to-background absolute inset-0 bg-gradient-to-b from-transparent" />
			</div>

			<section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 md:flex-row">
				<div className="w-full md:w-1/2">
					<Image
						src="/assets/about.png"
						alt="Team of professionals"
						width={600}
						height={400}
						className="rounded-lg"
					/>
				</div>

				<div className="w-full space-y-6 md:w-1/2">
					<span className="font-medium text-blue-500">About US</span>

					<h2 className="text-4xl font-bold text-white">
						Our Best Offering for new Statups
					</h2>

					<p className="leading-relaxed text-gray-300">
						Webflexrr Labs is a cutting-edge digital agency specializing in
						high-performance Landing Page and Web App Development. We help
						startups, small businesses, and enterprises build scalable,
						conversion-focused solutions. With a focus on innovation and user
						experience, we craft tailored web solutions that drive growth and
						success in the digital world.
					</p>
					<div className="w-full">
						<CallToActionButton />
					</div>
				</div>
			</section>
		</section>
	);
};

export default AboutSection;
