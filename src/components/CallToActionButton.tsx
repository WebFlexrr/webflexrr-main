import { Phone } from "lucide-react";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button } from "./ui/button";

export const CallToActionButton = () => {
	return (
		<Button className="border-secondary from-primary to-secondary font-space-grotesk gap-5 rounded-2xl border bg-linear-to-r px-5 py-6 text-lg text-white">
			Book A Friendly call{" "}
			<div className="flex items-center justify-center rounded-md border border-white p-2">
				<CiLocationArrow1 className="fill-white text-lg" />
			</div>
		</Button>
	);
};

export const ContactUsButton = () => {
	return (
		<Button className="border-secondary from-primary to-secondary font-space-grotesk gap-5 rounded-2xl border bg-linear-to-r text-base text-white">
			<Phone size={24} />
			Contact US
		</Button>
	);
};
