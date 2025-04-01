import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import ProjectCard from "@/components/ProjectCard";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { Project } from "@/types/sanity";

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
		<section className="relative px-4 py-12 md:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						// <motion.div
						// 	key={project.title}
						// 	initial={{ opacity: 0, y: 50 }}
						// 	whileInView={{ opacity: 1, y: 0 }}
						// 	viewport={{ once: true }}
						// 	transition={{ duration: 0.5, delay: index * 0.1 }}
						// >
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
							{/* </motion.div> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
