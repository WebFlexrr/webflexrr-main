import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Card, CardContent } from "./ui/card";

interface ProjectCardProps {
	thumbnail: string;
	title: string;
	description: string;
	link: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	thumbnail,
	title,
	description,
	link,
}) => {
	return (
		<Card
			// shadow="sm"
			className="mx-auto h-fit w-full max-w-4xl rounded-2xl border bg-slate-900"
		>
			<CardContent className="h-full w-full">
				<section className="flex h-full gap-3">
					<section className="w-1/2">
						<Image
							alt={title}
							className="aspect-4/3 w-full rounded-xl object-cover"
							src={thumbnail}
							width={1000}
							height={0}
						/>
					</section>
					<section className="flex h-full w-1/2 flex-col items-stretch justify-between">
						<section className="flex flex-col items-start">
							<h5 className="text-left">{title}</h5>
							<p className="text-foreground/55 mt-3">{description}</p>
						</section>
						<section className="flex flex-col gap-2">
							<section className="flex w-full gap-2">
								<span className="w-fit rounded-lg border px-2 py-1 text-sm">
									Personal
								</span>
								<span className="border-primary w-fit rounded-lg border px-2 py-1 text-sm">
									Business
								</span>
							</section>

							<Link
								href={link}
								className="border-primary-200 bg-primary hover:bg-primary-400 flex rounded-xl border-2 p-2 hover:text-white"
							>
								Open <MdOutlineArrowOutward size={26} />
							</Link>
						</section>
					</section>
				</section>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
