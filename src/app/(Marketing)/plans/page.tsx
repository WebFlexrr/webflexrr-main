import React from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Heading from "@/components/SectionHeading";
import Link from "next/link";
import PlansCard from "@/components/PlansCard";
import BlurredBg from "@/components/BlurredBg";
import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
	title: {
		default: "Plans",
		template: "%s | WebFlexrr Digital Services",
	},
	description: "This is Plan Page of Webflexrr Digital Services",
};

const plans = [
	{
		type: "Basic",
		title: "Landing Page",
		description:
			"A single, high-impact page designed to capture leads and drive conversions.",
		price: 400,
		list: [
			"User App Development",
			"User2 App Development",
			"User4 App Development",
		],
	},
	{
		type: "Recommended",
		title: "Landing 2 Page",
		description:
			"A single, high-impact page designed to capture leads and drive conversions.",
		price: 400,
		list: [
			"User App Development",
			"User2 App Development",
			"User4 App Development",
		],
	},
	{
		type: "Advanced",
		title: "Landing 3 Page",
		description:
			"A single, high-impact page designed to capture leads and drive conversions.",
		price: 400,
		list: [
			"User App Development",
			"User2 App Development",
			"User4 App Development",
		],
	},
];

const Plans = async (): Promise<React.JSX.Element> => {
	return (
		<main className="">
			<BlurredBg />
			<NavBar />
			<section className="h-auto w-full">
				<section className="mx-auto flex h-auto w-full max-w-7xl flex-col px-5 py-20 xl:py-36">
					{/* Heading */}
					<Heading
						heading={"The right price for you, with maximum value"}
						subHeading={
							"Simple pricing that makes sense for your business. No hidden fees."
						}
						para={"Plans"}
					/>

					<section className="mx-auto my-7 flex h-auto w-full flex-col items-center justify-center gap-6 lg:flex-row">
						<h5>If your have queries about our services </h5>
						<Link
							href={process.env.NEXT_PUBLIC_MEETING_LINK ?? ""}
							target="_blank"
							className="bg-primary cursor-pointer rounded-full border-2 border-black px-10 py-2.5 text-lg font-semibold text-white transition-colors"
						>
							Book a Call
						</Link>
					</section>

					{/* Selection Pannel */}
					<section className="mx-auto mt-10 mb-16 grid h-auto w-full max-w-lg grid-cols-1 flex-col gap-9 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:px-0">
						{plans.map((plan) => (
							<PlansCard
								key={plan.title}
								type={plan.type}
								title={plan.title}
								description={plan.description}
								price={plan.price}
								lists={plan.list}
							/>
						))}
					</section>
					<section className="flex h-auto w-full flex-col items-center justify-center gap-5">
						{/* <div className=" text-sm text-black ">
						Prices are per month per project.
					</div> */}
					</section>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default Plans;
