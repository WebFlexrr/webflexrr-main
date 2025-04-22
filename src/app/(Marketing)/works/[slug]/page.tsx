import type { Metadata } from "next";
import BlurredBg from "@/components/BlurredBg";
import SmoothScrolling from "@/components/SmoothScrolling";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { ProjectHero } from "../components/ProjectHero";
import { ProjectBanner } from "../components/ProjectBanner";
import { getProjects, getSingleProject } from "@/sanity/actions/queryActions";
import Footer2 from "@/components/Footer2";
import { cache } from "react";
import NavBar2 from "@/components/Navbar";
import ProjectTechStack from "../components/ProjectTechStack";
import ProjectAbout from "../components/ProjectAbout";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import ProjectFeatures from "../components/ProjectFeatures";
import { CTASection } from "../components/CTASection";
import FounderReview from "../components/FounderReview";

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

	console.log("Project Data--->", project);

	// const executionProcess = [
	// 	{
	// 		phase: "Planning & Research",
	// 		description:
	// 			"Understanding requirements, brainstorming solutions, and creating prototypes",
	// 		tasks: [
	// 			"Requirement Analysis",
	// 			"Market Research",
	// 			"Technical Feasibility",
	// 			"Prototyping",
	// 		],
	// 		image: "/images/projects/planning.jpg",
	// 	},
	// 	{
	// 		phase: "Design & Development",
	// 		description:
	// 			"Creating user interfaces and implementing core functionality",
	// 		tasks: [
	// 			"UI/UX Design",
	// 			"Frontend Development",
	// 			"Backend Integration",
	// 			"Database Design",
	// 		],
	// 		image: "/images/projects/development.jpg",
	// 	},
	// 	{
	// 		phase: "Testing & Refinements",
	// 		description: "Ensuring quality and optimizing performance",
	// 		tasks: [
	// 			"Quality Assurance",
	// 			"Performance Testing",
	// 			"User Testing",
	// 			"Bug Fixes",
	// 		],
	// 		image: "/images/projects/testing.jpg",
	// 	},
	// 	{
	// 		phase: "Deployment & Support",
	// 		description: "Launching the project and providing ongoing support",
	// 		tasks: [
	// 			"Production Deployment",
	// 			"Performance Monitoring",
	// 			"User Training",
	// 			"Maintenance",
	// 		],
	// 		image: "/images/projects/deployment.jpg",
	// 	},
	// ];

	return (
		<SmoothScrolling>
			<main className="h-fit p-0">
				<BlurredBg />
				<NavBar2 />
				<ProjectHero
					title={project?.title}
					description={project.description}
					tags={project.tags}
					projectLink={project.link}
				/>
				<ProjectBanner
					title={project.title}
					thumbnail={imageUrlFor(project?.thumbnail as SanityImageSource).url()}
					clientName={project.clientName}
					category={project.category}
					timeline={project.timeline}
					budget={project.budget}
				/>
				<ProjectAbout description={project.description} />
				<ProjectTechStack project={project} />
				<ProjectFeatures />
				<CTASection />
				<FounderReview />

				{/* <ProjectContent project={project} executionProcess={executionProcess} /> */}
				{/* {project.gallery && project.gallery.length > 0 && (
					<ProjectGallery gallery={project.gallery} />
				)} */}

				{/* <CallToActionBanner /> */}
				<Footer2 />
			</main>
		</SmoothScrolling>
	);
}
