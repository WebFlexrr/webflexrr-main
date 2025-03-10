import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import BlurredBg from "@/components/BlurredBg";
import AnnouncementBar from "@/components/AnnouncementBar";
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
				<AnnouncementBar />
				<NavBar />
				{/* <div className="container mx-auto px-4"> */}
				<section className="relative flex h-auto w-full flex-col items-center justify-center py-20">
					<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center px-7 text-center md:items-center md:px-14 xl:px-20">
						{/* Hero Section */}

						<section className="mx-auto mt-10 flex h-auto w-full max-w-4xl flex-col items-center gap-4 text-center text-white">
							<h1>Latest Insights & Stories</h1>
							<p className="mx-auto max-w-2xl text-lg text-purple-100/80">
								Discover our latest thoughts on web development, design trends,
								and digital innovation
							</p>
						</section>

						{/* Featured Blog Section */}
						{/* <section className="mb-24">
						<Link href={`/blogs/${featuredBlog.slug}`}>
						<Card className="group w-full max-w-lg overflow-hidden border-purple-200/20 bg-white/10 backdrop-blur-xl transition-all hover:shadow-2xl hover:shadow-purple-500/20">
						<CardContent className="p-0">
						<div className="grid gap-8 md:grid-cols-2">
						<div className="relative h-[400px] w-full overflow-hidden">
						<Image
						className="object-cover transition-transform duration-500 group-hover:scale-105"
						fill
						alt={featuredBlog.title}
						src={featuredBlog.thumbnail}
						priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
						</div>
						<div className="flex flex-col justify-center p-8">
						<span className="mb-4 inline-block rounded-full bg-purple-500/20 px-4 py-1 text-sm font-medium text-purple-200 backdrop-blur-sm">
						Featured
						</span>
						<h2 className="mb-4 text-3xl font-bold text-white">
						{featuredBlog.title}
						</h2>
						<p className="mb-6 text-purple-100/80">
						{featuredBlog.description}
						</p>
						<Button className="w-fit bg-purple-500 text-white transition-colors hover:bg-purple-600">
						Read Article
						</Button>
						</div>
						</div>
						</CardContent>
						</Card>
						</Link>
						</section> */}

						{/* Latest Blogs Grid */}

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
