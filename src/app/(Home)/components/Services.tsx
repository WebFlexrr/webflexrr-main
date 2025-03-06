import React from "react";
import { Check, PanelsTopLeft, Search } from "lucide-react";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { BsTypeH1 } from "react-icons/bs";
import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/ui/separator";
import { ShineBorder } from "@/components/shine-border";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
	{
		title: "Landing Page",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		background: (
			<section className="from-primary flex h-full w-full items-center justify-center rounded-lg bg-linear-to-tr to-[#549493]">
				<PanelsTopLeft size={80} />
			</section>
		),
		list: ["Website Content2", "Website Content1"],
	},
	{
		title: "App Developement",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		background: (
			<section className="from-primary flex h-full w-full items-center justify-center rounded-lg bg-linear-to-tr to-[#549493]">
				<IoLogoAndroid className="text-7xl" /> <FaPlus className="text-xl" />
				<TbBrandReactNative className="text-7xl" />
			</section>
		),
		list: ["Website Content2", "Website Content1"],
	},
	{
		title: "SEO",
		description:
			"We ensure your website ranks higher through advanced SEO strategies, driving organic traffic and improving visibility.",
		background: (
			<section className="from-primary flex h-full w-full items-center justify-center rounded-lg bg-linear-to-tr to-[#549493]">
				<BsTypeH1 className="text-7xl" />
			</section>
		),
		list: ["Website Content2", "Website Content3"],
	},
];

const Services = () => {
	return (
		<section className="w-full py-20 md:py-20">
			<section className="mx-auto w-full max-w-7xl px-5">
				<SectionHeading
					heading={` How We help Brands?`}
					subHeading={"Our Services"}
					para="Empowering startups with innovative solutions and strategic insights to accelerate growth and success."
				/>

				<div
					className={
						"mt-16 grid w-full grid-cols-1 flex-col gap-6 md:grid-cols-2 lg:grid-cols-3"
					}
				>
					{services.map((service) => (
						<ShineBorder
							key={service.title}
							className="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg p-0.5 md:shadow-xl"
							color={["#c6004c", "#0071f1", "#c6004c"]}
						>
							<Card className="bg-background w-full rounded-lg p-6">
								<CardHeader className="flex flex-col items-start gap-3">
									<div className="drop-shadow-primary bg-primary flex h-10 w-10 items-center justify-center rounded-sm drop-shadow-2xl">
										<Search />
									</div>
									<div className="my-4 flex flex-col items-start gap-1">
										<h5>{service.title}</h5>
										<p className="text-foreground/80 text-base">
											{service.description}
										</p>
									</div>
								</CardHeader>
								<Separator />
								<CardContent className="flex flex-col gap-2">
									{service.list.map((list) => (
										<div key={list} className="flex items-center gap-3">
											<span className="bg-secondary flex h-5 w-5 items-center justify-center rounded-full">
												<Check size={12} />
											</span>
											<p>{list}</p>
										</div>
									))}
								</CardContent>
							</Card>
						</ShineBorder>
					))}
				</div>
			</section>
		</section>
	);
};

export default Services;
