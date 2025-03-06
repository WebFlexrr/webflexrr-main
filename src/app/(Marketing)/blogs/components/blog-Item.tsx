import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export const BlogGrid = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="mt-20 grid w-full grid-cols-3 gap-10">
			{children}
		</section>
	);
};

export const BlogItem = ({
	image,
	title,
	description,
	slug,
	date,
}: {
	image: string;
	title: string;
	description: string;
	slug: string;
	date: string;
}) => {
	return (
		<Link href={`/blogs/${slug}`}>
			<Card
				// fullWidth
				className="row-span-1 space-y-4 rounded-xl border bg-white p-2 antialiased transition duration-200 hover:-translate-y-2 hover:shadow-2xl dark:border-white/[0.2] dark:bg-gray-700 dark:shadow-none"
			>
				<CardHeader>
					<Image
						src={image}
						alt={title}
						width={1000}
						height={0}
						className="aspect-video border"
					/>
				</CardHeader>
				<CardContent>
					<span className="mb-2 font-sans text-xl font-bold dark:text-neutral-200">
						{title}
					</span>
					<span className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
						{description}
					</span>
				</CardContent>
				<CardFooter className="flex justify-between">
					<span>
						{new Date(date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</span>
					<Button size="sm" className="bg-black text-sm text-white">
						Read More
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
};
