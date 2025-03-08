import Footer from "@/components/Footer";
import React, { cache } from "react";
import BlurredBg from "@/components/BlurredBg";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/Navbar";
import { Metadata } from "next";
import { getProjects, getSingleProject } from "@/sanity/actions/queryActions";
import Image from "next/image";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import { PortableTextComponents } from "@/components/PortableText";

export async function generateStaticParams() {
	const projects = await getProjects();

	return projects.map((project) => ({
		slug: project.slug?.current,
	}));
}

const getProjectData = cache(async (slug: string) => getSingleProject(slug));
export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const projectData = await getProjectData(slug);
	return {
		title: projectData.title,
		description: projectData.description,
		// keywords: blogData.seo?.seoKeywords,
		// openGraph: {
		// 	title: blogPage.seo?.openGraph?.title,
		// 	description: blogPage.seo?.openGraph?.description,
		// 	url: blogPage.seo?.openGraph?.url,
		// 	siteName: blogPage.seo?.openGraph?.siteName,
		// 	images: [
		// 		// imageUrlFor(workPage.seo?.openGraph?.image as SanityImageSource)
		// 		// 	.url(),
		// 	],
		// },
	};
}

const ProjectDetails = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const projectData = await getProjectData(slug);
	return (
		<main className="relative overflow-x-hidden p-0">
			<BlurredBg />
			<AnnouncementBar />
			<NavBar />
			<section className="relative h-auto w-full">
				<section className="h-auto w-full px-8 py-20 md:px-5 xl:py-36">
					<section className="mx-auto flex h-auto w-full max-w-[100rem] flex-col gap-20">
						<section>
							<section className="flex h-[50rem] w-full">
								<section className="flex h-full w-1/2 flex-col justify-between border pr-[14%] pb-40">
									<div className="flex w-full flex-col gap-5 border">
										<span>
											<h1>Title :</h1>
										</span>
										<span>
											<p>{projectData.title}</p>
										</span>
									</div>
									<div className="flex w-full flex-col gap-5 border">
										<span>
											<h4>Description :</h4>
										</span>
										<span>
											<p>{projectData.description}</p>
										</span>
									</div>
									<div className="flex w-full flex-col gap-5 border">
										<span>
											<h4>Client :</h4>
										</span>
										<span>
											<p>
												Maecenas eu vehicula felis Aen ean eleme ntum tortor ac
												nu Aliquam erat volutpat. Nulla molestie risus eget nibh
												mollis ultricies. Integer porttitor vehicula nisi, sit
												amet volutpat erat tincidunt non.
											</p>
										</span>
									</div>
									<div className="flex w-full flex-col gap-5 border">
										<span>
											<h4>Category :</h4>
										</span>
										<span>
											<p>
												Aliquam erat volutpat. Nulla molestie risus eget nibh
												mollis ultricies. Integer porttitor vehicula nisi, sit
												met volutpat erat tincidunt non. Praesent lacinia
												commodo massa, ac mattis sem facilisis ut.
											</p>
										</span>
									</div>
									<div className="flex w-full flex-col gap-5 border">
										<span>
											<h4>Share :</h4>
										</span>
										<span>
											<p>
												Aliquam erat volutpat. Nulla molestie risus eget nibh
												mollis ultricies. Integer porttitor vehicula nisi, sit
												met volutpat erat tincidunt non. Praesent lacinia
												commodo massa, ac mattis sem facilisis ut.
											</p>
										</span>
									</div>
								</section>
								<section className="h-full w-1/2 border">
									<Image
										src={
											projectData.thumbnail
												? imageUrlFor(
														projectData.thumbnail as SanityImageSource
													).url()
												: "/assets/background-home-2.jpg"
										}
										width={"1000"}
										height={"0"}
										alt={""}
										className="h-full w-full"
									/>
								</section>
							</section>
							<section className="mx-auto w-full max-w-3xl">
								<PortableText
									value={projectData.content!}
									components={PortableTextComponents}
								/>
							</section>
						</section>
					</section>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default ProjectDetails;
