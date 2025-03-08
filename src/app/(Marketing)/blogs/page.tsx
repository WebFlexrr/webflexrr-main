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
		title: {
			default: blogPage.seo!.metaTitle!,
			template: "%s | WebFlexrr Digital Services",
		},
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

// Mock data for development
// const mockBlogs = [
// 	{
// 		_id: "1",
// 		slug: "nextjs-13-revolutionary-features",
// 		title: "Next.js 13: Revolutionary Features for Modern Web Development",
// 		description:
// 			"Explore the game-changing features in Next.js 13, including server components, improved routing, and enhanced performance optimizations that are reshaping how we build web applications.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1170&auto=format&fit=crop",
// 		_createdAt: "2024-02-15",
// 	},
// 	{
// 		_id: "2",
// 		slug: "ai-driven-web-design",
// 		title: "AI-Driven Web Design: The Future of Digital Experiences",
// 		description:
// 			"Discover how artificial intelligence is transforming web design, from automated layouts to personalized user experiences.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
// 		_createdAt: "2024-02-14",
// 	},
// 	{
// 		_id: "3",
// 		slug: "responsive-design-best-practices",
// 		title: "Responsive Design Best Practices for 2024",
// 		description:
// 			"Learn the latest techniques and strategies for creating truly responsive websites that work flawlessly across all devices.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
// 		_createdAt: "2024-02-13",
// 	},
// 	{
// 		_id: "4",
// 		slug: "web-performance-optimization",
// 		title: "Web Performance Optimization Techniques",
// 		description:
// 			"Essential strategies to boost your website's performance, including lazy loading, code splitting, and modern image formats.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
// 		_createdAt: "2024-02-12",
// 	},
// 	{
// 		_id: "5",
// 		slug: "modern-css-techniques",
// 		title: "Modern CSS Techniques You Should Know",
// 		description:
// 			"Explore advanced CSS features like Grid, Custom Properties, and Container Queries that are changing how we style websites.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop",
// 		_createdAt: "2024-02-11",
// 	},
// 	{
// 		_id: "6",
// 		slug: "typescript-best-practices",
// 		title: "TypeScript Best Practices for Large Applications",
// 		description:
// 			"Learn how to effectively use TypeScript to build scalable and maintainable web applications.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop",
// 		_createdAt: "2024-02-10",
// 	},
// 	{
// 		_id: "7",
// 		slug: "web-accessibility-guide",
// 		title: "Complete Guide to Web Accessibility",
// 		description:
// 			"A comprehensive guide to making your websites accessible to everyone, including WCAG guidelines and practical implementations.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop",
// 		_createdAt: "2024-02-09",
// 	},
// 	{
// 		_id: "8",
// 		slug: "seo-optimization-techniques",
// 		title: "SEO Optimization Techniques for Developers",
// 		description:
// 			"Technical SEO strategies that developers can implement to improve website visibility and search engine rankings.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1174&auto=format&fit=crop",
// 		_createdAt: "2024-02-08",
// 	},
// 	{
// 		_id: "9",
// 		slug: "web-security-essentials",
// 		title: "Web Security Essentials Every Developer Should Know",
// 		description:
// 			"Essential security practices and techniques to protect your web applications from common vulnerabilities and threats.",
// 		thumbnail:
// 			"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop",
// 		_createdAt: "2024-02-07",
// 	},
// ];

const BlogPage = async (): Promise<React.JSX.Element> => {
	const blogs = await getBlogs();
	return (
		<SmoothScrolling>
			<main>
				<BlurredBg />
				<AnnouncementBar />
				<NavBar />
				{/* <div className="container mx-auto px-4"> */}
				<div className="relative flex h-auto w-full flex-col items-center justify-center px-5 py-20">
					<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center text-center md:items-center md:px-14 xl:px-20">
						{/* Hero Section */}
						<div className="mb-16 text-center">
							<h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
								Latest Insights & Stories
							</h1>
							<p className="mx-auto max-w-2xl text-lg text-purple-100/80">
								Discover our latest thoughts on web development, design trends,
								and digital innovation
							</p>
						</div>

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
						<section className="relative">
							<h2 className="mb-8 text-2xl font-bold text-white">
								Latest Articles
							</h2>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{blogs.map((blog) => (
									<div key={blog._id}>
										<BlogCard
											image={
												blog.thumbnail
													? imageUrlFor(
															blog.thumbnail as SanityImageSource
														).url()
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
					</section>
				</div>
				<Footer />
			</main>
		</SmoothScrolling>
	);
};

export default BlogPage;
