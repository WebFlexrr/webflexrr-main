import React from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Heading from "@/components/SectionHeading";

import NavBar from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
	title: {
		default: "Careers",
		template: "%s | WebFlexrr labs",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const Careers = async (): Promise<React.JSX.Element> => {
	return (
		// <main className="pt-28">
		<main>
			<NavBar />
			<Heading
				heading={"Careers"}
				subHeading={"Join Our Remote Team"}
				para={
					"we're dedicated to building a talented and diverse team, regardless of geographical location. Apply now to embark on a rewarding journey with us!"
				}
			/>

			<section className="mx-auto my-20 mb-60 flex w-full max-w-xl flex-col gap-10">
				<Card className="w-full">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={60}
							src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
							width={60}
						/>
						<div className="flex flex-col">
							<h5 className="text-md">React Developer</h5>
							<p className="text-small text-default-500">
								Role Availability : Full time
							</p>
						</div>
					</CardHeader>
					<Separator />
					<CardContent className="">
						<span>Job Description</span>
						<p>Make beautiful websites regardless of your design experience.</p>
					</CardContent>
				</Card>
				<Card className="w-full">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={60}
							src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
							width={60}
						/>
						<div className="flex flex-col">
							<h5 className="text-md">React Developer</h5>
							<p className="text-small text-default-500">
								Role Availability : Full time
							</p>
						</div>
					</CardHeader>
					<Separator />
					<CardContent className="">
						<span>Job Description</span>
						<p>Make beautiful websites regardless of your design experience.</p>
					</CardContent>
				</Card>
				<Card className="w-full">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={60}
							src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
							width={60}
						/>
						<div className="flex flex-col">
							<h5 className="text-md">React Developer</h5>
							<p className="text-small text-default-500">
								Role Availability : Full time
							</p>
						</div>
					</CardHeader>
					<Separator />
					<CardContent className="">
						<span>Job Description</span>
						<p>Make beautiful websites regardless of your design experience.</p>
					</CardContent>
				</Card>
			</section>
			<Footer />
		</main>
	);
};

export default Careers;
