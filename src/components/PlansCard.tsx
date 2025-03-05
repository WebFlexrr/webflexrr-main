import React, { type FC } from "react";


import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Separator } from "@radix-ui/react-separator";

interface PlansCardProps {
	type: string;
	title: string;
	price: number;
	description: string;
	lists: string[];
}
const PlansCard: FC<PlansCardProps> = ({
	type,
	title,
	price,
	description,
	lists,
}): React.JSX.Element => {
	return (
		<Card
			// isPressable
			// shadow="sm"
			className={`bg-grey-200 rounded-xl border shadow-xl ${type === "Recommended" ? "bg-secondarya z-10 shadow-secondary lg:scale-110" : "border-foreground-200 shadow-primary"} px-3 py-5`}
		>
			{/* heading */}
			<CardHeader className="flex w-full flex-col items-center justify-center pb-[2rem] text-white">
				<section className="w-full">
					{/* <Chip
						variant={"dot"}
						color={"success"}
						className={`${type === "Recommended" ? "bg-primary" : "border-foreground-200"} `}
					>
						{type}
					</Chip> */}
					<h4
						className={`font-dm-sans mt-5 text-3xl font-bold text-primary ${"text-white"}`}
					>
						{title}
					</h4>
				</section>
				<section className="mt-2 w-full">
					<span className="text-xl font-medium">
						Starting at:{" "}
						<s className="text-foreground-400 text-base font-thin">1000</s> $
						{price}
					</span>
				</section>
				<p className={`mt-3 w-full text-left text-base text-foreground`}>
					{description}
				</p>
			</CardHeader>
			<Separator />
			{/* mid Section */}
			<CardContent>
				<ul className="flex h-auto w-full flex-col items-start justify-center gap-4 text-start text-base leading-[28.8px]">
					{lists.map((list) => (
						<li key={list} className={`flex w-full items-center gap-2 text-sm`}>
							<Check className={"text-primary"} size={17} />
							<span
								className={`${type === "Recommended" ? "text-foreground" : " "} text-base`}
							>
								{list}
							</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Link
					href={""}
					target="_blank"
					className={`mt-8 ${
						type === "Recommended"
							? "border-white bg-foreground text-primary transition-all duration-100 ease-in-out hover:bg-primary hover:text-foreground"
							: "border-primary transition-all duration-100 ease-in-out hover:bg-primary hover:text-white"
					} flex w-full items-center justify-center rounded-lg border-2 p-2.5 text-lg font-semibold`}
				>
					Start Development
				</Link>
			</CardFooter>
		</Card>
	);
};

export default PlansCard;
