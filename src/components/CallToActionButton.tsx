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
			{/* <Button className="border-secondary from-primary to-secondary font-space-grotesk gap-5 rounded-2xl border bg-linear-to-r px-5 py-6 text-lg text-white"> */}
			<Button className="border-secondary bg-primary font-space-grotesk gap-5 rounded-2xl border px-5 py-6 text-lg text-white">
				Book A Free Consultation{" "}
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
			<Button className="border-secondary from-primary to-secondary font-space-grotesk flex h-10 items-center justify-center gap-5 rounded-2xl border bg-linear-to-r text-base text-white">
				Book free Consultation
			</Button>
		</Link>
	);
};
