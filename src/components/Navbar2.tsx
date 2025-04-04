"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CallToActionButton, ContactUsButton } from "./CallToActionButton";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

import { services } from "@/db/services";
import { Separator } from "./ui/separator";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "./ui/accordion";

const NavBar2 = () => {
	// const pathname = usePathname();

	//   const components: { title: string; href: string; description: string }[] = [
	//   {
	//     title: "Alert Dialog",
	//     href: "/docs/primitives/alert-dialog",
	//     description:
	//       "A modal dialog that interrupts the user with important content and expects a response.",
	//   },
	//   {
	//     title: "Hover Card",
	//     href: "/docs/primitives/hover-card",
	//     description:
	//       "For sighted users to preview content available behind a link.",
	//   },
	//   {
	//     title: "Progress",
	//     href: "/docs/primitives/progress",
	//     description:
	//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	//   },
	//   {
	//     title: "Scroll-area",
	//     href: "/docs/primitives/scroll-area",
	//     description: "Visually or semantically separates content.",
	//   },
	//   {
	//     title: "Tabs",
	//     href: "/docs/primitives/tabs",
	//     description:
	//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	//   },
	//   {
	//     title: "Tooltip",
	//     href: "/docs/primitives/tooltip",
	//     description:
	//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	//
	//  },
	// ]

	// const services: {
	// 	icon?: ReactNode;
	// 	title: string;
	// 	href?: string;
	// 	description: string;
	// }[] = [
	// 	{
	// 		icon: <IoLogoYoutube className="text-3xl text-red-600" />,
	// 		title: "UI/UX Designing",
	// 		href: "https://www.youtube.com/@ddkkhaaaofficial",
	// 		description: "Subscribe our Official Youtube Channel;",
	// 	},
	// 	{
	// 		icon: <FaSquareWhatsapp className="text-3xl text-green-400" />,
	// 		title: "Landing Page",
	// 		// href: "https://whatsapp.com/channel/0029VakxlQLIN9ikzx4JJo3E",
	// 		description: "Follow our Official Whatsapp Channel",
	// 	},
	// 	{
	// 		icon: <FaFacebookSquare className="text-3xl text-blue-600" />,
	// 		title: "Website Develeopment ",
	// 		// href: "https://www.facebook.com/ddkkhaaaofficial",
	// 		description: "Follow our Official Facebook Page",
	// 	},
	// ];

	// const menuItems = [
	// {
	// content: "Home",
	// link: "/",
	// },
	// {
	// content: "works",
	// link: "/works",
	// },
	// {
	// content: "Blogs",
	// link: "/blogs",
	// },
	// ];

	return (
		<header className="sticky top-0 z-50 w-full md:top-8 md:my-5">
			<section className="relative z-10 mx-auto flex h-16 w-full max-w-7xl items-center px-5 backdrop-blur-xl md:rounded-full">
				{/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f35] to-[#0c1322]" /> */}
				<section className="flex w-full items-center justify-start">
					<Link href={"/"} className="flex w-fit items-center gap-3">
						<Image
							src={"/logos/white-logo.png"}
							width={30}
							height={30}
							alt={"Webflexrr Labs."}
						/>
						<div className="font-space-grotesk font-bold text-white md:text-lg">
							Webflexrr Labs.
						</div>
					</Link>
				</section>
				<section className="hidden w-full items-center justify-center md:flex">
					<NavigationMenu>
						<NavigationMenuList className="flex w-fit gap-4 rounded-full bg-black px-4 py-2 text-white">
							<NavigationMenuItem>
								<Link href={"/"} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href={"/services"} legacyBehavior passHref>
									<NavigationMenuTrigger
										className={navigationMenuTriggerStyle()}
									>
										Services
									</NavigationMenuTrigger>
								</Link>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px]">
										{services.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												icon={component.icon}
												href={component.link}
												gradient={component.gradient}
											/>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href={"/works"} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Portfolio
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href={"/blogs"} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Blogs
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</section>
				<section className="flex w-full items-center justify-end">
					<ContactUsButton />
					<Sheet>
						<SheetTrigger className="md:hidden">
							<Menu className="text-white" />
						</SheetTrigger>
						<SheetContent side={"top"} className="h-screen dark:text-white">
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<Separator />
							<div className="flex w-full flex-1 flex-col items-start px-5 font-semibold dark:text-white">
								<Link href={"/"} className="w-full border-b border-white p-4">
									Home
								</Link>
								<Link
									href={"/services"}
									className="w-full border-b border-white p-4"
								>
									Services
								</Link>

								<Link
									href={"/portfolio"}
									className="w-full border-b border-white p-4"
								>
									portfolio
								</Link>
								<Link
									href={"/blogs"}
									className="w-full border-b border-white p-4"
								>
									Blogs
								</Link>
								<Link
									href={"/contact"}
									className="w-full border-b border-white p-4"
								>
									Contact
								</Link>

								<section className="flex w-full flex-col items-center pt-10">
									<CallToActionButton />
								</section>

								{/* <Accordion type="single" collapsible className="w-full">
									<AccordionItem value="item-1">
										<AccordionTrigger className="w-full py-2 text-base font-semibold">
											Community
										</AccordionTrigger>
										<AccordionContent className="flex flex-col tracking-wide text-blue-600">
											{socialPlatform.map((social) => (
												<Link
													key={social.title}
													href={social.href}
													target="_blank"
													className="flex w-full items-center gap-2 py-2 pl-3"
												>
													{social.icon}
													{social.title}
													<ArrowUpRight size={20} />
												</Link>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion> */}
							</div>
						</SheetContent>
					</Sheet>
				</section>
			</section>
		</header>
	);
};

export default NavBar2;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	{
		className?: string;
		icon?: React.ReactNode;
		title: string;
		gradient: string;
		// children: React.ReactNode;
	} & React.ComponentPropsWithoutRef<"a">
>(({ className, icon, title, gradient, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				{/* <div
					className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
				/> */}
				<a
					ref={ref}
					className={cn(
						// 'block select-none flex space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						"group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative grid grid-cols-4 gap-2 space-y-1 rounded-lg p-3 leading-none no-underline transition-colors outline-none select-none",
						className
					)}
					{...props}
				>
					<div
						className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
					/>
					<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-white">
						{icon}
					</div>
					{/* <div className="col-span-1 flex items-center justify-center">
						{icon}
					</div> */}

					<div className="col-span-3 flex items-center">
						<div className="text-base leading-none font-medium">{title}</div>
						{/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
							{/* {children} 
						</p> */}
					</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
// const ListItem = React.forwardRef<
// 	React.ElementRef<"a">,
// 	{
// 		className?: string;
// 		icon?: React.ReactNode;
// 		title: string;
// 		// children: React.ReactNode;
// 	} & React.ComponentPropsWithoutRef<"a">
// >(({ className, icon, title, ...props }, ref) => {
// 	return (
// 		<li>
// 			<NavigationMenuLink asChild>
// 				{icon ? (
// 					<a
// 						ref={ref}
// 						className={cn(
// 							// 'block select-none flex space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
// 							"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex gap-2 space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
// 							className
// 						)}
// 						{...props}
// 					>
// 						<div className="flex w-1/6 items-center justify-center bg-amber-50">
// 							{icon}
// 						</div>

// 						<div className="w-2/3">
// 							<div className="text-base leading-none font-medium">{title}</div>
// 							<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
// 								{/* {children} */}
// 							</p>
// 						</div>
// 					</a>
// 				) : (
// 					<a
// 						ref={ref}
// 						className={cn(
// 							"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",

// 							className
// 						)}
// 						{...props}
// 					>
// 						<div className="text-base leading-none font-medium">{title}</div>
// 						<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
// 							{/* {children} */}
// 						</p>
// 					</a>
// 				)}
// 			</NavigationMenuLink>
// 		</li>
// 	);
// });
// ListItem.displayName = "ListItem";
