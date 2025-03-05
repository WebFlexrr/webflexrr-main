import { CallToActionButton } from "@/components/CallToActionButton";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
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
		<section className="h-auto w-full">
			<Card className="z-20 mx-auto my-40 flex w-full max-w-7xl flex-col items-center rounded-2xl border-5 bg-gradient-to-b from-primary to-primary-900">
				<CardHeader className="flex flex-col items-center">
					<Image
						src={"/logos/white-logo.png"}
						width={30}
						height={30}
						alt={"webflexrr Labs"}
					/>
					<CardTitle>Let Have a Chat</CardTitle>
					<CardDescription>
						Get up to 90% of the benefits of your account.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col items-center">
					<CallToActionButton />
					<div className="flex gap-2">
						<div className="flex gap-2">
							<span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
								<Check size={12} />
							</span>
							<p>5 years of expertise</p>
						</div>
						<div className="flex gap-2">
							<span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
								<Check size={12} />
							</span>
							<p>Team of experts</p>
						</div>
						<div className="flex gap-2">
							<span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary">
								<Check size={12} />
							</span>
							<p>5 Free website audit</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default CallToActionBanner;
