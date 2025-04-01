import React from "react";

// import ProjectCard from "@/components/ProjectCard";
import BlurredBg from "@/components/BlurredBg";
import NavBar from "@/components/Navbar";
// import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import { getWorkPageMetadata } from "@/sanity/actions/metadataQueryActions";
import { getProjects } from "@/sanity/actions/queryActions";

import CallToActionBanner from "@/components/CallToActionBanner";

// import { HeroSection } from "./components/HeroSection";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { CTASection } from "./components/CTASection";
import { FilterCategories } from "./components/FilterCategories";
import Footer2 from "@/components/Footer2";

// export async function generateMetadata(): Promise<Metadata> {
// 	const workPage = await getWorkPageMetadata();

// 	return {
// 		title: workPage.seo?.metaTitle,
// 		description: workPage.seo?.metaDescription,
// 		keywords: workPage.seo?.seoKeywords,
// 		openGraph: {
// 			title: workPage.seo?.openGraph?.title,
// 			description: workPage.seo?.openGraph?.description,
// 			url: workPage.seo?.openGraph?.url,
// 			siteName: workPage.seo?.openGraph?.siteName,
// 			images: workPage.seo?.openGraph?.image
// 				? [
// 						{
// 							url: imageUrlFor(
// 								workPage.seo.openGraph.image as SanityImageSource
// 							).url(),
// 							width: 1200,
// 							height: 630,
// 							alt: workPage.seo?.metaTitle || "Project Image",
// 						},
// 					]
// 				: [],
// 		},
// 	};
// }

export default async function Works() {
	const projects = await getProjects();

	return (
		<main className="relative h-fit overflow-x-hidden p-0">
			<BlurredBg />
			{/* <AnnouncementBar /> */}
			<NavBar />

			{/* <HeroSection /> */}
			<FilterCategories />
			<ProjectsGrid projects={projects} />
			<CTASection />

			<CallToActionBanner />
			<Footer2 />
		</main>
	);
}
