import React from "react";
// import ProjectCard from "@/components/ProjectCard";
import BlurredBg from "@/components/BlurredBg";
// import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { getWorkPageMetadata } from "@/sanity/actions/metadataQueryActions";
import { getProjects } from "@/sanity/actions/queryActions";
import CallToActionBanner from "@/components/CallToActionBanner";
// import { HeroSection } from "./components/HeroSection";
import { ProjectsGrid } from "./components/ProjectsGrid";

import Footer2 from "@/components/Footer2";
import NavBar2 from "@/components/Navbar";
import { getWorkPageMetadata } from "@/sanity/actions/metadataQueryActions";
import { Metadata } from "next";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HeroSection from "./components/HeroSection";

export async function generateMetadata(): Promise<Metadata> {
	const workPage = await getWorkPageMetadata();

	return {
		title: workPage.seo?.metaTitle,
		description: workPage.seo?.metaDescription,
		keywords: workPage.seo?.seoKeywords,
		openGraph: {
			title: workPage.seo?.openGraph?.title,
			description: workPage.seo?.openGraph?.description,
			url: workPage.seo?.openGraph?.url,
			siteName: workPage.seo?.openGraph?.siteName,
			images: workPage.seo?.openGraph?.image
				? [
						{
							url: imageUrlFor(
								workPage.seo.openGraph.image as SanityImageSource
							).url(),
							width: 1200,
							height: 630,
							alt: workPage.seo?.metaTitle || "Project Image",
						},
					]
				: [],
		},
	};
}

export default async function Works() {
	const projects = await getProjects();

	return (
		<main className="bg-background dark h-fit p-0">
			<BlurredBg />
			{/* <AnnouncementBar /> */}
			<NavBar2 />
			{/* Hero Section */}
			<HeroSection
				title={"Webflexrr Lab's Diverse Portfolio of Creative Brilliance"}
				description={
					"Explore Our portfolio, a testament to our commitment to creative brilliance. From captivating web designs to Robust Applications."
				}
			/>
			{/* <HeroSection /> */}
			{/* <FilterCategories /> */}
			<ProjectsGrid projects={projects} />
			{/* <CTASection /> */}

			<CallToActionBanner />
			<Footer2 />
		</main>
	);
}
