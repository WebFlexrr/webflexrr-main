import React from "react";

import BlogCard from "@/components/BlogCard";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import SectionHeading from "@/components/SectionHeading";
import { getBlogs } from "@/sanity/actions/queryActions";

const BlogSection = async () => {
	const blogs = await getBlogs();
	return (
		<section className="bg-background dark w-full py-20 md:py-20">
			<section className="mx-auto w-full max-w-7xl px-5">
				<div
				// initial={{ opacity: 0, y: 50 }}
				// whileInView={{ opacity: 1, y: 0 }}
				// viewport={{ once: true }}
				// transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
				>
					<SectionHeading
						heading="What's New In Our Blog"
						subHeading="Insights and News"
						align="left"
					/>
				</div>

				<div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
					{/* {services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.2,
								type: "tween",
								ease: "easeOut",
							}}
						>
							<ServicesCard
								title={service.title}
								description={service.description}
								list={service.list}
								gradient={service.gradient}
								icon={service.icon}
							/>
						</motion.div>
					))} */}
				</div>
			</section>
		</section>
	);
};

export default BlogSection;
