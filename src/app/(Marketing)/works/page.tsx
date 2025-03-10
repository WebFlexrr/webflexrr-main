import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import ProjectCard from "@/components/ProjectCard";
import BlurredBg from "@/components/BlurredBg";
import NavBar from "@/components/Navbar";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { getWorkPageMetadata } from "@/sanity/actions/metadataQueryActions";
import { getProjects } from "@/sanity/actions/queryActions";
import SmoothScrolling from "@/components/SmoothScrolling";
import CallToActionBanner from "@/app/(Home)/components/CallToActionBanner";

export async function generateMetadata(): Promise<Metadata> {
	const workPage = await getWorkPageMetadata();
	console.log(workPage.seo?.openGraph);

	// console.log(
	// 	"Open graph Image",
	// 	imageUrlFor(workPage.seo?.openGraph?.image as SanityImageSource)
	//
	// 		.url()
	// );
	return {
		title: workPage.seo?.metaTitle,
		description: workPage.seo?.metaDescription,
		keywords: workPage.seo?.seoKeywords,
		openGraph: {
			title: workPage.seo?.openGraph?.title,
			description: workPage.seo?.openGraph?.description,
			url: workPage.seo?.openGraph?.url,
			siteName: workPage.seo?.openGraph?.siteName,
			images: [
				// imageUrlFor(workPage.seo?.openGraph?.image as SanityImageSource)
				// 	.url(),
			],
		},
	};
}
const Works = async (): Promise<React.JSX.Element> => {
	const projects = await getProjects();

	return (
		<SmoothScrolling>
			<main className="relative overflow-x-hidden p-0">
				<BlurredBg />
				<AnnouncementBar />
				<NavBar />
				<section className="relative flex h-auto w-full flex-col items-center justify-center py-20">
					<div className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center px-7 text-center md:items-center md:px-14 xl:px-20">
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
									thumbnail={imageUrlFor(
										item.thumbnail as SanityImageSource
									).url()}
									slug={item.slug?.current}
									tags={item.tags}
									title={item.title}
									description={item.description}
								/>
							))}
						</section>
					</div>
				</section>
				<CallToActionBanner />
				<Footer />
			</main>
		</SmoothScrolling>
	);
};

export default Works;
