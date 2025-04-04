import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import BlurredBg from "@/components/BlurredBg";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { getBlogPageMetadata } from "@/sanity/actions/metadataQueryActions";
import SmoothScrolling from "@/components/SmoothScrolling";
import { getBlogs } from "@/sanity/actions/queryActions";

export async function generateMetadata(): Promise<Metadata> {
	const blogPage = await getBlogPageMetadata();

	return {
		title: blogPage.seo!.metaTitle!,
		description: blogPage.seo?.metaDescription,
		keywords: blogPage.seo?.seoKeywords,
		openGraph: {
			title: blogPage.seo?.openGraph?.title,
			description: blogPage.seo?.openGraph?.description,
			url: blogPage.seo?.openGraph?.url,
			siteName: blogPage.seo?.openGraph?.siteName,
			images: [
				// imageUrlFor(workPage.seo?.openGraph?.image as SanityImageSource)
				// 	.url(),
			],
		},
	};
}

const BlogPage = async (): Promise<React.JSX.Element> => {
	const blogs = await getBlogs();
	return (
		<SmoothScrolling>
			<main className="relative p-0">
				<BlurredBg />
				{/* <AnnouncementBar /> */}
				<NavBar />

				<section className="relative flex h-auto w-full flex-col items-center justify-center py-20 pb-40">
					<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center px-7 text-center md:items-center md:px-14 xl:px-20">
						{/* Hero Section */}

						<section className="mx-auto mt-10 flex h-auto w-full max-w-4xl flex-col items-center gap-4 text-center text-white">
							<h1>Latest Insights & Stories</h1>
							<p className="mx-auto max-w-2xl text-lg text-purple-100/80">
								Discover our latest thoughts on web development, design trends,
								and digital innovation
							</p>
						</section>

						<section className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{blogs.map((blog) => (
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
						</section>
					</section>
				</section>
				<Footer />
			</main>
		</SmoothScrolling>
	);
};

export default BlogPage;
