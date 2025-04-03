import type { Metadata } from "next";
import BlurredBg from "@/components/BlurredBg";
import SmoothScrolling from "@/components/SmoothScrolling";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { ProjectHero } from "../components/ProjectHero";
import { ProjectBanner } from "../components/ProjectBanner";
import { ProjectContent } from "../components/ProjectContent";
import { getProjects, getSingleProject } from "@/sanity/actions/queryActions";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer2 from "@/components/Footer2";
import { cache } from "react";
import NavBar2 from "@/components/Navbar2";
import ProjectTechStack from "../components/ProjectTechStack";
import ProjectAbout from "../components/ProjectAbout";

export async function generateStaticParams() {
	const projects = await getProjects();
	return projects.map((project) => ({
		slug: project.slug?.current,
	}));
}

//chached data
const getProjectData = cache(
	async (slug: string) => await getSingleProject(slug)
);

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const project = await getProjectData((await params).slug);

	if (!project) {
		return {
			title: "Project Not Found",
			description: "The requested project could not be found.",
		};
	}

	return {
		title: project.title || "Project",
		description: project.description || "Project details",
		openGraph: {
			title: project.title || "Project",
			description: project.description || "Project details",
			images: project.thumbnail
				? [
						{
							url: imageUrlFor(project.thumbnail).url(),
							width: 1200,
							height: 630,
							alt: project.title || "Project thumbnail",
						},
					]
				: [],
		},
	};
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const project = await getProjectData((await params).slug);

	// console.log("Project Data--->",project)

	const executionProcess = [
		{
			phase: "Planning & Research",
			description:
				"Understanding requirements, brainstorming solutions, and creating prototypes",
			tasks: [
				"Requirement Analysis",
				"Market Research",
				"Technical Feasibility",
				"Prototyping",
			],
			image: "/images/projects/planning.jpg",
		},
		{
			phase: "Design & Development",
			description:
				"Creating user interfaces and implementing core functionality",
			tasks: [
				"UI/UX Design",
				"Frontend Development",
				"Backend Integration",
				"Database Design",
			],
			image: "/images/projects/development.jpg",
		},
		{
			phase: "Testing & Refinements",
			description: "Ensuring quality and optimizing performance",
			tasks: [
				"Quality Assurance",
				"Performance Testing",
				"User Testing",
				"Bug Fixes",
			],
			image: "/images/projects/testing.jpg",
		},
		{
			phase: "Deployment & Support",
			description: "Launching the project and providing ongoing support",
			tasks: [
				"Production Deployment",
				"Performance Monitoring",
				"User Training",
				"Maintenance",
			],
			image: "/images/projects/deployment.jpg",
		},
	];

	return (
		<SmoothScrolling>
			<main className="h-fit p-0">
				<BlurredBg />
				<NavBar2 />
				{/* <BackButton /> */}

				{/* Banner Section */}
				{/* <section className="relative h-[60vh] w-full"> */}
				{/* {project.thumbnail ? (
						<Image
							src={imageUrlFor(project.thumbnail).url()}
							alt={project.title || "Project banner"}
							fill
							className="object-cover"
							priority
						/>
					) : (
						<Image
							src="/images/projects/default-banner.jpg"
							alt="Project banner"
							fill
							className="object-cover"
							priority
						/>
					)} */}

				{/* <div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center">
							<h1
								// initial={{ opacity: 0, y: 20 }}
								// animate={{ opacity: 1, y: 0 }}
								// transition={{ duration: 0.5 }}
								className="text-4xl font-bold text-white md:text-6xl"
							>
								{project.title}
							</h1>
							<p
								// initial={{ opacity: 0, y: 20 }}
								// animate={{ opacity: 1, y: 0 }}
								// transition={{ duration: 0.5, delay: 0.2 }}
								className="mt-6 text-lg text-gray-200 md:text-xl"
							>
								{project.description}
							</p>
						</div>
					</div> */}
				{/* </section> */}

				<ProjectHero project={project} />
				<ProjectBanner project={project} />
				<ProjectAbout project={project} />
				<ProjectTechStack project={project} />

				<ProjectContent project={project} executionProcess={executionProcess} />
				{/* {project.gallery && project.gallery.length > 0 && (
					<ProjectGallery gallery={project.gallery} />
				)} */}
				{/* <ProjectCTA /> */}
				<CallToActionBanner />
				<Footer2 />
			</main>
		</SmoothScrolling>
	);
}
