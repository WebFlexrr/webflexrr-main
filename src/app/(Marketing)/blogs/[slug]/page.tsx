import React, { cache } from "react";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import BlurredBg from "@/components/BlurredBg";

import NavBar from "@/components/Navbar";
import Image from "next/image";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { PortableText } from "next-sanity";
import { getBlogs, getSingleBlog } from "@/sanity/actions/queryActions";
import { PortableTextComponents } from "@/components/PortableText";

//chached data
const getBlogsData = cache(async (slug: string) => await getSingleBlog(slug));

//Static params
export async function generateStaticParams() {
	const blogs = await getBlogs();

	return blogs.map((blog) => ({
		slug: blog.slug?.current,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const blogData = await getBlogsData(slug);
	return {
		title: blogData.title,
		description: blogData.description,
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

const Blog = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<React.JSX.Element> => {
	const { slug } = await params;
	const blogData = await getBlogsData(slug);
	return (
		<main>
			<BlurredBg />
			{/* <AnnouncementBar /> */}
			<NavBar />
			<section className="relative mx-auto mb-20 flex h-auto w-full max-w-[90rem] flex-col items-center justify-center gap-20 px-10 pt-20 md:items-center md:px-14 md:pt-20 lg:pt-40 xl:px-20">
				<div className="flex w-full flex-col gap-5 text-center">
					<h1 className="font-space-grotesk mx-auto w-full max-w-3xl text-center text-3xl font-bold md:text-6xl md:leading-[82px] lg:max-w-4xl dark:text-white">
						{blogData?.title}
					</h1>
					<p className="mx-auto max-w-4xl text-purple-100/80">
						{blogData?.description}
					</p>
				</div>
				<div className="w-full">
					<Image
						src={
							blogData.thumbnail
								? imageUrlFor(blogData.thumbnail as SanityImageSource).url()
								: "/assets/background-home-2.jpg"
						}
						alt={blogData.title ?? ""}
						width={1000}
						height={0}
						className="aspect-screen w-full transition-transform duration-500 group-hover:scale-110"
					/>
				</div>
				<div className="mx-auto w-full max-w-3xl">
					<PortableText
						value={blogData.content!}
						components={PortableTextComponents}
					/>
				</div>
				{/* <section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center text-center md:items-center md:px-14 xl:px-20">
					{/* Hero Section */}

				{/* Latest Blogs Grid *
					<section className="relative">
						<h2 className="mb-8 text-2xl font-bold text-white">
							Latest Articles
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{/* {blogs.map((blog) => (
								<div key={blog._id}>
									<BlogCard
										image={
											blog.thumbnail
												? imageUrlFor(blog.thumbnail as SanityImageSource).url()
												: "/assets/background-home-2.jpg"
										}
										title={blog.title}
										description={blog.description}
										slug={blog.slug?.current}
										date={blog._createdAt}
									/>
								</div>
							))} 
						</div>
					</section>
				</section> */}
			</section>
			<Footer />
		</main>
	);
};

export default Blog;
