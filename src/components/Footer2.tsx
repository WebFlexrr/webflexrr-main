import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Footer2 = () => {
	const socialLinks = [
		{
			title: "Twitter",
			icon: <FaXTwitter className="text-lg font-light" />,
			link: "https://x.com/webflexrrlabs",
		},
		{
			title: "LinkedIn",
			icon: <FaLinkedin className="text-lg font-light" />,
			link: "https://www.linkedin.com/company/webflexrrlabs",
		},
		{
			title: "Instagram",
			icon: <LuInstagram className="text-lg font-light" />,
			link: "https://www.instagram.com/webflexrr_labs",
		},
	];
	const quickLinks = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Services",
			link: "/services",
		},
		{
			title: "Projects",
			link: "/work",
		},
		{
			title: "Careers",
			link: "/careers",
		},
		{
			title: "Blogs",
			link: "/blogs",
		},
		{
			title: "Contact Us",
			link: "/contact",
		},
	];
	const servicesLinks = [
		{
			title: "Landing Page Development",
			link: "/services/",
		},
		{
			title: "React Development",
			link: "/services",
		},
		{
			title: "UI/UX Design",
			link: "/work",
		},
		{
			title: "Application Maintenance",
			link: "/careers",
		},
		{
			title: "Backend Development",
			link: "/blogs",
		},
	];
	const contactInfo = [
		{
			title: "+91 9038007312",
			icon: <FiPhone className="text-primary text-lg font-light" />,
			link: "https://wa.me/+919038007312",
		},
		{
			title: "+91 7044785308",
			icon: <FiPhone className="text-primary text-lg font-light" />,
			link: "https://wa.me/+917044785308",
		},
		{
			title: "info@webflexrr.com",
			icon: <IoMailOutline className="text-primary text-lg font-light" />,
			link: "mailto:info@webflexrr.com",
		},
		{
			title: "Working remotely worldwide",
			icon: <FiMapPin className="text-primary text-lg font-light" />,
			link: "https://www.instagram.com/webflexrr_labs",
		},
	];

	return (
		<footer className="bg-background dark w-full">
			<Separator className="bg-white/25" />
			<div className="text-tertiary mx-auto flex h-auto w-full max-w-7xl flex-col gap-10 py-16 text-white">
				<section className="grid w-full grid-cols-1 gap-y-14 px-5 md:grid-cols-2 md:gap-14 lg:grid-cols-4 lg:px-0">
					<section className="flex w-full flex-col gap-4 md:col-span-2 lg:col-span-1">
						<Link href={"/"} className="flex w-fit items-center gap-3">
							<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
								<Image
									src={"/logos/white-logo.png"}
									width={25}
									height={25}
									alt={"Webflexrr Labs."}
									className=""
								/>
							</div>
							<div className="font-space-grotesk font-bold text-white md:text-2xl">
								Webflexrr Labs.
							</div>
						</Link>
						<p className="text-sm leading-6 text-gray-400">
							Crafting exceptional Apps with React & Flutter. We transform your
							ideas into elegant, high-performance applications.
						</p>
						<ul className="flex w-full gap-2">
							{socialLinks.map((link) => (
								<li key={link.link}>
									<Link
										href={link.link}
										target="_blank"
										aria-label={link.title}
										className="hover:text-primary/95 flex h-8 w-8 items-center justify-center rounded bg-white/10 text-gray-400 transition-all duration-300 ease-in-out"
									>
										{link.icon}
									</Link>
								</li>
							))}
						</ul>
					</section>
					<section className="flex w-full flex-col gap-4 text-black lg:items-center dark:text-white">
						<span className="text-lg font-bold text-black dark:text-white">
							Quick Links
						</span>
						<ul className="marker:text-primary list-inside list-disc space-y-4">
							{quickLinks.map((link) => (
								<li key={link.link}>
									<Link
										href={link.link}
										className="hover:text-primary/95 font-medium text-gray-400 transition-all duration-300 ease-in-out"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</section>
					<section className="flex w-full flex-col gap-4 text-black dark:text-white">
						<span className="text-lg font-bold text-black dark:text-white">
							Services
						</span>
						<ul className="marker:text-primary list-inside list-disc space-y-4">
							{servicesLinks.map((link) => (
								<li key={link.link}>
									<Link
										href={link.link}
										className="hover:text-primary/95 font-medium text-gray-400 transition-all duration-300 ease-in-out"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</section>
					<section className="flex w-full flex-col gap-4 text-black dark:text-white">
						<span className="text-lg font-bold text-black dark:text-white">
							Contact Info
						</span>
						<ul className="marker:text-primary list-inside space-y-4">
							{contactInfo.map((link) => (
								<li key={link.link}>
									<Link
										href={link.link}
										target="_blank"
										aria-label={link.title}
										className="hover:text-primary/95 flex items-center gap-3 font-medium text-gray-400 transition-all duration-300 ease-in-out"
									>
										{link.icon} {link.title}
									</Link>
								</li>
							))}
						</ul>
						<Link
							href={process.env.NEXT_PUBLIC_MEETING_LINK!}
							className="mt-10"
						>
							<Button className="rounded-full px-14 py-6 text-white">
								Get in touch
								<MoveRight />
							</Button>
						</Link>
					</section>
				</section>

				<Separator className="bg-white/25" />
				<section className="lg: flex w-full flex-col items-center justify-between px-5 md:flex-row">
					<section className="w-fit">
						<p className="text-sm">
							&#169; 2024 Webflexrr Labs. All rights reserved.
						</p>
					</section>
					<section className="w-fit">
						<ul className="flex gap-5">
							<li>
								<Link
									href={"/terms"}
									target="_blank"
									aria-label="Linkedin"
									className="hover:text-primary/95 flex items-center gap-2 text-gray-400 transition-all duration-300 ease-in-out"
								>
									Terms & Condition
								</Link>
							</li>

							<li className="flex items-center gap-2">
								<Link
									href={"/privacy"}
									target="_blank"
									aria-label="Instagram"
									className="hover:text-primary/95 flex items-center gap-2 text-gray-400 transition-all duration-300 ease-in-out"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</section>
				</section>
			</div>
		</footer>
	);
};

export default Footer2;
