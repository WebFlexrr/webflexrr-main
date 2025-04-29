import { getBlogs, getProjects } from "@/sanity/actions/queryActions";
import type { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
	const blogSlugUrls: string[] = (await getBlogs()).map(
		(blog) => `/blogs/${blog.slug?.current}`
	);
	const projectSlugUrls: string[] = (await getProjects()).map(
		(project) => `/works/${project.slug?.current}`
	);
	const servicesSlugUrls: string[] = (await getProjects()).map(
		(project) => `/works/${project.slug?.current}`
	);

	return {
		rules: {
			userAgent: "*",
			allow: [
				"/",
				"/careers",
				"/contact",
				"/industries",
				"/booking",
				"/blogs",
				"/works",
				"/services",
				...blogSlugUrls,
				...projectSlugUrls,
				...servicesSlugUrls,
				"/privacy",
				"/terms",
				"/refund",
			],
			disallow: ["/plans"],
		},
		sitemap: "https://webflexrr.com/sitemap.xml",
	};
}
