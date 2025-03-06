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
		<>
			<nav className="fixed top-8 z-20 my-5 w-full">
				<section className="mx-auto flex w-full max-w-7xl items-center px-5">
					<section className="flex w-full items-center justify-start">
						<div className="flex w-fit items-center gap-3">
							<Image
								src={"/logos/white-logo.png"}
								width={30}
								height={30}
								alt={"Webflexrr Labs."}
							/>
							<div className="font-space-grotesk text-lg font-bold text-white">
								Webflexrr Labs.
							</div>
						</div>
					</section>
					<section className="flex w-full items-center justify-center">
						<NavigationMenu>
							<NavigationMenuList className="flex w-fit gap-4 rounded-full bg-black px-4 py-2 text-white">
								{/* <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> 
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
								{/* <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
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
					</section>
				</section>
			</nav>
		</>
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
