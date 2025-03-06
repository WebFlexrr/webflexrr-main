import ProjectCard from "@/components/ProjectCard";
import Heading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { getProjectsActions } from "@/sanity/actions/queryActions";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsSection = async (): Promise<React.JSX.Element> => {
	const projects = await getProjectsActions();
	return (
		<section className="h-auto w-full py-20" id="projects">
			<section className="mx-auto w-full max-w-7xl px-5">
				<Heading heading={"Our Works"} subHeading={"Our works"} />
				<section className="mt-12 grid w-full grid-cols-1 gap-6">
					{projects.map((item) => (
						<ProjectCard
							key={item.title}
							thumbnail={item.thumbnail}
							title={item.title}
							description={
								"Streamline your hiring process with automated candidate screening, saving time and ensuring quality talent with each call."
							}
							link={item.link}
						/>
					))}
				</section>
				<section className="mt-16 flex w-full items-center justify-center">
					<Link href={"/works"}>
						<Button className="bg-primary font-inter rounded-full p-6 py-7 text-lg font-medium">
							See All Projects <ArrowRight />
						</Button>
					</Link>
				</section>
			</section>
		</section>
	);
};

export default ProjectsSection;
