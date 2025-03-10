"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ContactUsButton } from "./CallToActionButton";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
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
	//   },
	// ]
	const menuItems = [
		{
			content: "Home",
			link: "/",
		},
		{
			content: "works",
			link: "/works",
		},
		// {
		// 	content: "Pricing",
		// 	link: "/pricing",
		// },
		// {
		// 	content: "about",
		// 	link: "/about",
		// },
		// {
		// 	content: "Careers",
		// 	link: "/careers",
		// },
		{
			content: "Blogs",
			link: "/blogs",
		},
	];
	return (
		<header className="sticky top-0 z-20 w-full md:top-8 md:my-5">
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
							{menuItems.map((navLink) => (
								<NavigationMenuItem key={navLink.content}>
									<Link href={navLink.link} legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											{navLink.content}
										</NavigationMenuLink>
									</Link>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</section>
				<section className="flex w-full items-center justify-end">
					<ContactUsButton />
					<Sheet>
						<SheetTrigger className="md:hidden">
							<Menu className="text-white" />
						</SheetTrigger>
						<SheetContent side={"top"}>
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
								{/* <SheetDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</SheetDescription> */}
							</SheetHeader>
							<NavigationMenu>
								<NavigationMenuList className="flex w-full flex-col gap-4 px-4 py-4 text-white">
									{menuItems.map((navLink) => (
										<NavigationMenuItem key={navLink.content}>
											<Link href={navLink.link} legacyBehavior passHref>
												<NavigationMenuLink
													className={
														(navigationMenuTriggerStyle(), "w-full border")
													}
												>
													{navLink.content}
												</NavigationMenuLink>
											</Link>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</SheetContent>
					</Sheet>
				</section>
			</section>
		</header>
	);
};

export default NavBar;

const ListItem = React.forwardRef<
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
ListItem.displayName = "ListItem";
