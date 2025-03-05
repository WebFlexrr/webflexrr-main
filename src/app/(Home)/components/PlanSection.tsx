import Heading from "@/components/SectionHeading";
import PlansCard from "@/components/PlansCard";

import Link from "next/link";
import React from "react";

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

const PlanSection = (): React.JSX.Element => {
	return (
		<section id="plans" className="h-auto w-full">
			<section className="mx-auto flex h-auto w-full max-w-7xl flex-col px-5 py-20">
				{/* Heading */}
				<Heading
					heading={"Our Best Offering for new Statups"}
					subHeading={"Our Pricing"}
					para="We offer a range of flexible pricing plans tailored to suit businesses of all sizes."
				/>

				<section className="mx-auto mb-24 mt-20 grid h-auto w-full max-w-lg grid-cols-1 flex-col gap-10 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:px-0">
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
					<Link
						href={"/plans"}
						className="cursor-pointer rounded-full border px-4 py-2 text-sm font-bold text-foreground"
					>
						✨ See all feature and compare plans
					</Link>
				</section>
			</section>
		</section>
	);
};

export default PlanSection;
