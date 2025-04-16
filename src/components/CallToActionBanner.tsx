"use client";
import { CallToActionButton } from "@/components/CallToActionButton";
import { motion } from "motion/react";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

// const people = [
// 	{
// 		id: 1,
// 		name: "John Doe",
// 		designation: "Software Engineer",
// 		image:
// 			"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
// 	},
// 	{
// 		id: 2,
// 		name: "Robert Johnson",
// 		designation: "Product Manager",
// 		image:
// 			"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// 	},
// 	{
// 		id: 3,
// 		name: "Jane Smith",
// 		designation: "Data Scientist",
// 		image:
// 			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// 	},
// 	{
// 		id: 4,
// 		name: "Emily Davis",
// 		designation: "UX Designer",
// 		image:
// 			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// 	},
// 	{
// 		id: 5,
// 		name: "Tyler Durden",
// 		designation: "Soap Developer",
// 		image:
// 			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
// 	},
// 	{
// 		id: 6,
// 		name: "Dora",
// 		designation: "The Explorer",
// 		image:
// 			"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
// 	},
// ];

const CallToActionBanner = (): React.JSX.Element => {
	return (
		<section className="bg-background dark h-auto w-full">
			<section className="w-full px-5 py-20">
				<Card className="from-primary to-primary/40 relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center gap-5 rounded-2xl bg-gradient-to-b py-12">
					<div
						className={cn(
							"absolute inset-0",
							"[background-size:20px_20px]",
							// "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
							// "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
							"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
						)}
					/>
					{/* Radial gradient for the container to give a faded look */}
					{/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
					<CardHeader className="z-10 flex flex-col items-center gap-5">
						{/* <Image
							src={"/logos/white-logo.png"}
							width={60}
							height={60}
							alt={"webflexrr Labs"}
						/> */}
						<div className="z-10 flex items-center gap-2">
							<AvatarGroup className="flex items-center" max={3}>
								<Avatar className="h-11 w-11">
									<AvatarImage src="/assets/avatar1.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="h-11 w-11">
									<AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="h-11 w-11">
									<AvatarImage src="/assets/avatar2.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar className="h-11 w-11">
									<AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</AvatarGroup>
						</div>
						<CardTitle>
							<motion.h4
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								Ready to Get Started?
							</motion.h4>
						</CardTitle>
						<CardDescription className="text-center">
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.1 }}
								className="mb-8 text-lg text-gray-400"
							>
								Contact us to discuss your project and see how we can help you
								succeed.
							</motion.p>
						</CardDescription>
					</CardHeader>
					<CardContent className="z-10 flex flex-col items-center gap-5">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<CallToActionButton />
						</motion.div>
						{/* <div className="flex flex-col gap-2 py-4 lg:flex-row">
							<div className="flex items-center gap-2">
								<span className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
									<Check size={12} />
								</span>
								<p>2 years of expertise</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
									<Check size={12} />
								</span>
								<p>Team of experts</p>
							</div>
							{/* <div className="flex gap-2">
								<span className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
									<Check size={12} />
								</span>
								<p>5 Free website audit</p>
							</div> 
						</div> */}
					</CardContent>
				</Card>
			</section>
		</section>
	);
};

export default CallToActionBanner;
