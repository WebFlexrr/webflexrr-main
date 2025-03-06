import React from "react";
import Footer from "@/components/Footer";

const Blog = async (): Promise<React.JSX.Element> => {
	return (
		<main className="mx-auto h-auto w-full max-w-7xl overflow-x-hidden py-16 lg:py-28">
			{/* <TracingBeam className="px-6">
					<section className="flex w-full justify-center ">
						<h1>{blogData.title}</h1>
					</section>
					<div className="relative mx-auto mt-10 max-w-2xl antialiased">
						<Image
							src={blogData.thumbnail}
							className="w-full "
							alt={blogData.title}
						/>
						<PortableText
							value={blogData.content}
							components={PortableTextComponents}
						/>
					</div>
				</TracingBeam> */}
			<Footer />
		</main>
	);
};

export default Blog;
