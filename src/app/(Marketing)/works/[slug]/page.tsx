import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import BlurredBg from "@/components/BlurredBg";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";

import { motion } from "framer-motion";

import { BackButton } from "../components/BackButton";
import { ProjectHero } from "../components/ProjectHero";
import { ProjectBanner } from "../components/ProjectBanner";
import { ProjectContent } from "../components/ProjectContent";
import { ProjectGallery } from "../components/ProjectGallery";
import { ProjectCTA } from "../components/ProjectCTA";
import { getSingleProject } from "@/sanity/actions/queryActions";

// export async function generateStaticParams() {
// 	const projects = await getProjects();
// 	return projects.map((project) => ({
// 		slug: project.slug?.current,
// 	}));
// }

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const project = await getSingleProject((await params).slug);

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
	const project = await getSingleProject((await params).slug);

	// if (!project) {
	// 	notFound();
	// }

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
				<NavBar />
				<BackButton />

				{/* Banner Section */}
				<section className="relative h-[60vh] w-full">
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
					<div className="absolute inset-0 bg-black/50" />
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="text-4xl font-bold text-white md:text-6xl"
							>
								{project.title}
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="mt-6 text-lg text-gray-200 md:text-xl"
							>
								{project.description}
							</motion.p>
						</div>
					</div>
				</section>

				<ProjectHero project={project} />
				<ProjectBanner project={project} />
				<ProjectContent project={project} executionProcess={executionProcess} />
				{project.gallery && project.gallery.length > 0 && (
					<ProjectGallery gallery={project.gallery} />
				)}
				<ProjectCTA />
				<Footer />
			</main>
		</SmoothScrolling>
	);
}
