import ProjectCard from "@/components/ProjectCard";
import Heading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/sanity/actions/queryActions";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsSection = async (): Promise<React.JSX.Element> => {
	const projects = await getProjects();
	return (
		<section className="h-auto w-full py-20">
			<section className="mx-auto w-full max-w-7xl px-5">
				<Heading heading={"Our Works"} subHeading={"Our works"} />
				<section className="mt-12 grid w-full grid-cols-1 gap-6">
					{projects.map((item) => (
						<ProjectCard
							key={item.title}
							thumbnail={imageUrlFor(item.thumbnail as SanityImageSource).url()}
							title={item.title}
							description={item.description}
							tags={item.tags}
							// slug={item.slug?.current}
							link={item.link}
						/>
					))}
				</section>
				<section className="mt-16 flex w-full items-center justify-center">
					<Link href={"/works"}>
						<Button className="bg-primary font-inter rounded-full px-10 py-6 text-base font-medium text-white lg:text-lg">
							See All Projects <ArrowRight />
						</Button>
					</Link>
				</section>
			</section>
		</section>
	);
};

export default ProjectsSection;
