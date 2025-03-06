import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/actions/queries";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProjectCard from "@/components/ProjectCard";
import BlurredBg from "@/components/BlurredBg";
import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
	title: {
		default: "Our Portfolio of High Performing landing page",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Works = async (): Promise<React.JSX.Element> => {
	const projects = await sanityFetch<getAllProjects[]>({
		query: PROJECT_QUERY,
	});

	return (
		<main className="relative overflow-x-hidden p-0">
			<BlurredBg />
			<AnnouncementBar />
			<NavBar />
			<section className="relative mb-20 flex h-auto w-full flex-col items-center justify-center px-7 pt-20 md:pt-20 lg:py-40">
				<div className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center text-center md:items-center md:px-14 xl:px-20">
					<section className="mx-auto mt-10 flex h-auto w-full max-w-2xl flex-col items-center gap-4 text-center text-white">
						{/* <span className="from-primary to-secondary flex gap-3 rounded-full bg-gradient-to-r p-0.5">
									<div className="bg-background rounded-full px-7 py-3 text-base">
										{subHeading}
									</div>
								</span> */}
						<h1>Show Case our Best Works</h1>

						{/* <p className="max-w-lg">{para}</p> */}
					</section>
					<section className="mt-12 grid w-full grid-cols-1 gap-6">
						{projects.map((item) => (
							<ProjectCard
								key={item.title}
								thumbnail={item.thumbnail}
								title={item.title}
								description={item.description}
								link={item.link}
							/>
						))}
					</section>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default Works;
