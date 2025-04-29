import { services } from "@/db/services";
import { getBlogs, getProjects } from "@/sanity/actions/queryActions";
import type { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const baseUrl = "https://www.webflexrr.com";

	const blogs: MetadataRoute.Sitemap = (await getBlogs()).map((blog) => {
		return {
			url: `${baseUrl}/blogs/${blog.slug?.current}`,
			lastModified: blog._updatedAt,
			changeFrequency: "monthly",
			priority: 0.9,
		};
	});
	const projects: MetadataRoute.Sitemap = (await getProjects()).map(
		(project) => {
			return {
				url: `${baseUrl}/works/${project.slug?.current}`,
				lastModified: project._updatedAt,
				changeFrequency: "monthly",
				priority: 0.9,
			};
		}
	);
	const servicesData: MetadataRoute.Sitemap = services.map((service) => {
		return {
			url: `${baseUrl}/services/${service.slug}`,

			changeFrequency: "monthly",
			priority: 0.9,
		};
	});

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/plans`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/industries`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/booking`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/blogs`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/works`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...blogs,
		...projects,
		...servicesData,
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/refund`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
	];
};

export default sitemap;
