import { Phone } from "lucide-react";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button } from "./ui/button";
import Link from "next/link";

export const CallToActionButton = () => {
	return (
		<Link
			href={process.env.NEXT_PUBLIC_MEETING_LINK!}
			className="cursor-pointer"
		>
			<Button className="border-secondary from-primary to-secondary font-space-grotesk gap-5 rounded-2xl border bg-linear-to-r px-5 py-6 text-lg text-white">
				Book A Friendly call{" "}
				<div className="flex items-center justify-center rounded-md border border-white p-2">
					<CiLocationArrow1 className="fill-white text-lg" />
				</div>
			</Button>
		</Link>
	);
};

export const ContactUsButton = () => {
	return (
		<Link href={"/booking"} className="hidden md:flex">
			<Button className="border-secondary from-primary to-secondary font-space-grotesk gap-5 rounded-2xl border bg-linear-to-r text-base text-white">
				<Phone size={24} />
				Contact US
			</Button>
		</Link>
	);
};
