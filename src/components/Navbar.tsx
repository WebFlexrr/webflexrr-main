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
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Menu, Rss, ScrollText, X } from "lucide-react";
import { services } from "@/db/services";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

const NavBar = () => {
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

	const insights = [
		{
			title: "Blogs",
			icon: <Rss className="h-8 w-8" />,
			link: "/blogs",
			gradient: "from-purple-500/20 via-transparent to-pink-500/10",
		},
		{
			title: "White Papers",
			icon: <ScrollText className="h-8 w-8" />,
			link: "",
			gradient: "from-purple-500/20 via-transparent to-pink-500/10",
		},
	];

	return (
		<header className="dark sticky top-0 z-50 w-full md:top-8 md:my-5">
			<motion.section className="bg-background/40 relative z-10 mx-auto flex h-16 w-full max-w-7xl items-center px-5 backdrop-blur-xl md:rounded-full">
				{/* <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f35] to-[#0c1322]" /> */}
				<section className="flex w-full items-center justify-start">
					<Link href={"/"} className="flex w-fit items-center gap-3">
						<div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white bg-white">
							<Image
								src={"/logos/white-logo.png"}
								width={21}
								height={21}
								alt={"Webflexrr Labs."}
								className="invert"
							/>
						</div>
						<div className="font-space-grotesk font-bold text-white md:text-lg">
							Webflexrr Labs.
						</div>
					</Link>
				</section>
				<section className="hidden w-full items-center justify-center xl:flex">
					<NavigationMenu>
						<NavigationMenuList className="flex w-fit gap-1 rounded-full bg-black px-4 py-2 text-white">
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
									<ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[620px]">
										{services.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												icon={component.icon}
												href={`/services/${component.slug}`}
												gradient={component.gradient}
											/>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/* <NavigationMenuItem>
								<Link href={"/solutions"} legacyBehavior passHref>
									<NavigationMenuTrigger
										className={navigationMenuTriggerStyle()}
									>
										Solutions
									</NavigationMenuTrigger>
								</Link>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px]">
										{solutions.map((component) => (
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
							</NavigationMenuItem> */}
							{/* <NavigationMenuItem>
								<Link href={"/industries"} legacyBehavior passHref>
									<NavigationMenuTrigger
										className={navigationMenuTriggerStyle()}
									>
										Industries
									</NavigationMenuTrigger>
								</Link>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px]">
										{industries.map((component) => (
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
							</NavigationMenuItem> */}
							<NavigationMenuItem>
								<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
								<NavigationMenuContent>
									<section className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-3">
										<section className="col-span-1">
											<NavigationMenuLink asChild>
												<a
													className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
													href="/"
												>
													{/* <Icons.logo className="h-6 w-6" /> */}
													<div className="mt-4 mb-2 text-xl font-medium">
														Solutions
													</div>
													<p className="text-muted-foreground text-sm leading-tight">
														We at Webflexrr make sure that your business will
														get Webflexrr at all points possible. We have
														solutions for multiple industries that can match an
														array of business goals best suited for visionaries
														of all kinds. Be it a CEO or a CTO we address all of
														you.
													</p>
												</a>
											</NavigationMenuLink>
										</section>
										<section className="bg-muted col-span-2 h-full w-full rounded-md border p-3">
											<section className="w-full">
												<span className="font-space-grotesk text-xl font-bold">
													Solutions
												</span>
												<Separator className="mt-3" />
											</section>
											<section className="grid w-full grid-cols-2 py-3">
												<div className="flex w-full flex-col gap-2">
													<Link href={""} className="text-xl">
														By Industry
													</Link>
													<ul className="grid grid-cols-1 gap-1">
														<li className="w-full">
															<Link href={""}>Hospital</Link>
														</li>
														<li>
															<Link href={""}>Real Estate</Link>
														</li>
														<li>
															<Link href={""}>IT industries </Link>
														</li>
													</ul>
												</div>
												<div className="flex w-full flex-col gap-2">
													<Link href={""} className="text-xl">
														Our Solutions
													</Link>
													<ul className="grid grid-cols-1 gap-1">
														<li>
															<Link href={""} className="w-full">
																Frontend development
															</Link>
														</li>
														<li>
															<Link href={""}>Backend Development</Link>
														</li>
														<li>
															<Link href={""}>Chat Bot Development</Link>
														</li>
														<li>
															<Link href={""}>AI automation</Link>
														</li>
														<li>
															<Link href={""}>MVP Developement</Link>
														</li>
													</ul>
												</div>
											</section>
										</section>
									</section>
									{/* <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
													href="/"
												>
													{/* <Icons.logo className="h-6 w-6" /> 
													<div className="mt-4 mb-2 text-xl font-medium">
														Solutions
													</div>
													<p className="text-muted-foreground text-sm leading-tight">
														We at Webflexrr make sure that your business will
														get Webflexrr at all points possible. We have
														solutions for multiple industries that can match an
														array of business goals best suited for visionaries
														of all kinds. Be it a CEO or a CTO we address all of
														you.
													</p>
												</a>
											</NavigationMenuLink>
										</li>

										<ListItem2 href="/docs" title="Introduction">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem2>
										<ListItem2 href="/docs/installation" title="Installation">
											How to install dependencies and structure your app.
										</ListItem2>
										<ListItem2
											href="/docs/primitives/typography"
											title="Typography"
										>
											Styles for headings, paragraphs, lists...etc
										</ListItem2>
									</ul> */}
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/* <NavigationMenuItem>
								<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
													href="/"
												>
													{/* <Icons.logo className="h-6 w-6" /> 
													<div className="mt-4 mb-2 text-lg font-medium">
														shadcn/ui
													</div>
													<p className="text-muted-foreground text-sm leading-tight">
														Beautifully designed components built with Radix UI
														and Tailwind CSS.
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem2 href="/docs" title="Introduction">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem2>
										<ListItem2 href="/docs/installation" title="Installation">
											How to install dependencies and structure your app.
										</ListItem2>
										<ListItem2
											href="/docs/primitives/typography"
											title="Typography"
										>
											Styles for headings, paragraphs, lists...etc
										</ListItem2>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem> */}
							<NavigationMenuItem>
								<Link href={"/works"} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Portfolio
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<Link href={"/insights"} legacyBehavior passHref>
									<NavigationMenuTrigger
										className={navigationMenuTriggerStyle()}
									>
										Insights
									</NavigationMenuTrigger>
								</Link>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[620px]">
										{insights.map((component) => (
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
							{/* <NavigationMenuItem>
								<Link
									href={"https://shop.webflexrr.com"}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Shop
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							 */}
							<NavigationMenuItem>
								<Link href={"/contact"} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact Us
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</section>
				<section className="flex w-full items-center justify-end gap-3">
					<Sheet>
						<SheetTrigger className="xl:hidden">
							<Menu className="text-white" />
						</SheetTrigger>

						<SheetContent side={"top"} className="dark bg-background h-screen">
							<SheetHeader>
								<SheetTitle className="flex justify-between">
									<span>Menu</span>
									<SheetClose>
										<X className="text-white" />
									</SheetClose>
								</SheetTitle>
							</SheetHeader>
							<Separator />
							<section className="flex w-full flex-col items-start overflow-y-auto px-5 font-semibold dark:text-white">
								<Link href={"/"} className="w-full border-b border-white p-4">
									Home
								</Link>
								<Accordion type="single" collapsible className="w-full p-0">
									<AccordionItem value="item-1" className="w-full">
										<AccordionTrigger className="rounded-none border-b border-white">
											<Link href={"/services"} className="w-full px-4 text-lg">
												Services
											</Link>
										</AccordionTrigger>
										<AccordionContent className="flex w-full flex-col">
											{services.map((service) => (
												<Link
													key={service.slug}
													href={`/services/${service.slug}`}
													className="flex w-full items-center gap-2 p-4 px-6"
												>
													<div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/[0.05] p-1 text-sm text-white">
														{service.icon}
													</div>
													{service.title}
												</Link>
											))}
										</AccordionContent>
									</AccordionItem>
								</Accordion>

								<Link
									href={"/works"}
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
							</section>
						</SheetContent>
					</Sheet>
					<ContactUsButton />
				</section>
			</motion.section>
		</header>
	);
};

export default NavBar;

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

const ListItem2 = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
						className
					)}
					{...props}
				>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem2.displayName = "ListItem2";
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
