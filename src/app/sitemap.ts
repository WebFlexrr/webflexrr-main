import { ALL_BLOG_QUERY } from "@/sanity/actions/queries";
import { sanityFetch } from "@/sanity/lib/client";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const baseUrl = "https://www.webflexrr.com";

	const allBlogs = await sanityFetch<getBlog[]>({ query: ALL_BLOG_QUERY });

	const blogs = allBlogs.map((blog) => {
		return {
			url: `${baseUrl}/blogs/${blog.slug}`,
			lastModified: blog._updatedAt,
		};
	});

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/plans`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/blogs/`,
			lastModified: new Date(),
		},
		...blogs,
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/refund`,
			lastModified: new Date(),
		},
	];
};

export default sitemap;
