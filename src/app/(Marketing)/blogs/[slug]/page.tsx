import React, { cache } from "react";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/lib/client";
import { Blogs } from "@/types/sanity";
import { BLOG_QUERY, GET_SINGLE_BLOG_QUERY } from "@/sanity/actions/queries";
import { Metadata } from "next";
import BlurredBg from "@/components/BlurredBg";
import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const getBlogsData = cache(async (slug: string) => {
	return await sanityFetch<Blogs>({
		query: GET_SINGLE_BLOG_QUERY(slug),
	});
});
export async function generateStaticParams() {
	const blogs = await sanityFetch<Blogs[]>({
		query: BLOG_QUERY,
	});

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
			<AnnouncementBar />
			<NavBar />
			{/* <div className="container mx-auto px-4"> */}
			<div className="relative flex h-auto w-full flex-col items-center justify-center px-5 py-20">
				<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center text-center md:items-center md:px-14 xl:px-20">
					<div>
						<Image
							src={
								blogData.thumbnail
									? imageUrlFor(blogData.thumbnail as SanityImageSource).url()
									: "/assets/background-home-2.jpg"
							}
							alt={blogData.title ?? ""}
							width={1000}
							height={0}
							className="aspect-[4/3] w-full rounded-lg transition-transform duration-500 group-hover:scale-110"
						/>
					</div>
					{/* Hero Section */}
					<div className="mb-16 text-center">
						<h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
							{blogData.title}
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-purple-100/80">
							{blogData.description}
						</p>
					</div>

					{/* Latest Blogs Grid */}
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
							))} */}
						</div>
					</section>
				</section>
			</div>
			<Footer />
		</main>
	);
};

export default Blog;
