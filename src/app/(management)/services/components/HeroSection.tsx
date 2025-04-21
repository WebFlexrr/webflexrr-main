import { CallToActionButton } from "@/components/CallToActionButton";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import React, { FC } from "react";

interface HeroSectionProps {
	title?: string;
	tagline?: string;
}

const ServiceHeroSection: FC<HeroSectionProps> = ({ title, tagline }) => {
	const people = [
		{
			id: 1,
			name: "John Doe",
			designation: "Software Engineer",
			image:
				"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
		},
		{
			id: 2,
			name: "Robert Johnson",
			designation: "Product Manager",
			image:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 3,
			name: "Jane Smith",
			designation: "Data Scientist",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
		},
		{
			id: 4,
			name: "Emily Davis",
			designation: "UX Designer",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
		},
	];
	return (
		<section className="dark relative flex h-[70vh] w-full flex-col items-center justify-center py-20 md:pt-20">
			{/* Hero Content */}
			<div className="bg-background absolute -z-10 h-full w-full"></div>
			<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center px-7 text-center md:items-center md:px-14 xl:px-20">
				<span className="mb-4 flex items-center gap-5 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-white">
					<div className="relative h-2 w-2">
						<span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-green-500"></span>
						{/* <span className="h-2 w-2 animate-ping  rounded-full bg-green-500"></span> */}
					</div>
					We Taking Projects for April 2025
				</span>

				<h1 className="mb-4">{title}</h1>

				<p className="mb-8 text-gray-400">{tagline}</p>

				<div className="mb-12">
					<CallToActionButton />
				</div>

				{/* Customer Avatars */}
				<div className="z-10 flex flex-col items-center">
					<div className="flex w-full flex-row items-center justify-center">
						<AnimatedTooltip items={people} />
					</div>
					<div className="mt-4 w-full text-gray-400">15+ Happy Customers</div>
				</div>
			</section>

			{/* <section className="flex w-full items-center justify-center">
				<section className="text-foreground-500 z-20 mx-auto my-4 flex flex-col gap-2 border-green-400 text-lg text-white md:text-lg lg:flex-row">
					<span className="">We use industry standard technologies</span>
					<span className="flex flex-wrap justify-center gap-1">
						<span className="flex items-center gap-2">
							<Link
								href={"https://www.figma.com"}
								className="text-foreground mx-2 flex items-center justify-center gap-1 font-bold"
							>
								<Image
									src={"/com-logos/figma.png"}
									width={20}
									height={20}
									alt={"Figma logo"}
									className="h-[20px] w-[20px]"
								/>
								Figma
							</Link>
						</span>
						,
						<span className="flex items-center gap-2">
							<Image
								src={"/tech-logos/react.png"}
								width={20}
								height={20}
								alt={"Figma logo"}
								className="h-[20px] w-[20px]"
							/>
							React
						</span>
						and
						<span className="flex items-center gap-2">
							<Link
								href={"https://www.figma.com"}
								className="text-foreground mx-2 flex items-center gap-1 font-bold"
							>
								<Image
									src={"/tech-logos/framer.png"}
									width={30}
									height={30}
									alt={"Figma logo"}
									className="h-[30px] w-[30px]"
								/>
								Framer
							</Link>
						</span>
					</span>
				</section>
			</section> */}
		</section>
	);
};

export default ServiceHeroSection;
