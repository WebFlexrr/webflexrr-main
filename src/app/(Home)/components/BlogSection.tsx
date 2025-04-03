"use client";
import React, { FC } from "react";
import { motion } from "motion/react";

import { Blogs } from "@/types/sanity";
import BlogCard from "@/components/BlogCard";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface BlogSectionProps {
	blogs: Blogs[];
}
const BlogSection: FC<BlogSectionProps> = ({ blogs }) => {
	return (
		<section className="w-full py-20 md:py-20">
			<section className="mx-auto w-full max-w-7xl px-5">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
				>
					{/* <SectionHeading
						heading="WHAT'S NEW IN OUR BLOG"
						subHeading="Insights and News"
						para="Empowering startups with innovative solutions and strategic insights to accelerate growth and success."
					/> */}
					<section className="mx-auto mt-10 flex h-auto w-full max-w-7xl flex-col items-start gap-4 text-center text-white">
						<span className="from-primary to-secondary flex gap-3 rounded-full bg-gradient-to-r p-0.5">
							<div className="bg-background rounded-full px-7 py-3 text-base">
								Insights and News
							</div>
						</span>
						<h2 className="text-5xl font-bold text-black dark:text-white">
							What'S New In Our Blog
						</h2>
					</section>
				</motion.div>

				<div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{blogs.map((blog) => (
						<motion.div key={blog._id}>
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
						</motion.div>
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
