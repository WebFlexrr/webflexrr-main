import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
	image: string;
	title: string;
	description: string;
	slug: string;
	date: string;
	category?: string;
}

const BlogCard = ({
	image,
	title,
	description,
	slug,
	date,
	category = "Development",
}: BlogCardProps) => {
	return (
		<Card className="group hover:shadow-secondary/20 dark:from-primary/50 dark:to-primary-900/50 relative h-full overflow-hidden border-none bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
			{/* Subtle gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-700/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

			<CardHeader className="p-0">
				{/* Image Container */}
				<div className="relative w-full overflow-hidden rounded-lg">
					<Image
						src={image}
						alt={title}
						width={1000}
						height={0}
						className="aspect-[4/3] w-full rounded-lg transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

					{/* Date Badge */}
					<div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 backdrop-blur-md">
						<CalendarDays className="h-4 w-4 text-purple-200" />
						<time className="text-sm font-medium text-purple-100">
							{new Date(date).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
							})}
						</time>
					</div>
				</div>
			</CardHeader>

			{/* Content */}
			<CardContent className="relative space-y-2">
				{/* Category Tag */}
				<div className="flex gap-2">
					<span className="bg-primary-500/10 inline-block rounded-full px-3 py-1 text-xs font-medium text-purple-300">
						{category}
					</span>
				</div>

				{/* Title */}
				<h5 className="line-clamp-2 text-left font-bold text-white transition-colors group-hover:text-purple-200">
					{title}
				</h5>

				{/* Description */}
				<p className="line-clamp-2 text-sm text-gray-300/80">{description}</p>

				{/* Read More Link */}
				<div className="pt-4">
					<Link
						href={`/blogs/${slug}`}
						className="inline-flex items-center text-sm font-medium text-purple-300 transition-colors group-hover:text-purple-200"
					>
						Read Article
						<svg
							className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default BlogCard;
