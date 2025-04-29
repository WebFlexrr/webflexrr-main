import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { Project } from "@/types/sanity";
import ProjectCard from "./ProjectCard";

// interface Project {
// 	title: string;
// 	description: string;
// 	thumbnail: SanityImageSource;
// 	slug: { current: string };
// 	tags: string[];
// }

interface ProjectsGridProps {
	projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<section className="relative px-4 py-20 md:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
					{projects.map((project) => (
						<div key={project.title}>
							<ProjectCard
								thumbnail={imageUrlFor(
									project.thumbnail as SanityImageSource
								).url()}
								slug={project.slug?.current}
								tags={project.tags}
								title={project.title}
								description={project.description}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
