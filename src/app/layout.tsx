import type { Metadata } from "next";
// import { Geist, Geist_Mono,Space_Grotesk } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: {
		default:
			"WebFlexrr Labs | Crafting High-Performance Websites for Maximize your Business 10X ",
		template: "%s | WebFlexrr Digital Services",
	},
	description:
		"WebFlexrr Labs: Elevate your online presence with WebFlexrr's Web Development . Specializing in E-commerce Solutions, Responsive Design, SEO, and more for impactful, custom web solutions. Learn more....",
	metadataBase: new URL("https://www.webflexrr.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
			"de-DE": "/de-DE",
		},
	},
	verification: {
		google: process.env.GOOGLE_CONSOLE_VID,
	},
	referrer: "origin-when-cross-origin",
	keywords: [
		"WebFlexrr Web Development",
		"WebFlexrr Digital Services",
		"WebFlexrr SEO Solutions",
		"E-commerce Solutions by WebFlexrr",
		"Graphic Design by WebFlexrr",
		"WebFlexrr SEO Experts",
		"Responsive WebFlexrr Design",
		"Web Development",
		"SAAS Development",
		"Website Design",
		"SEO Services",
		"Online Presence",
		"E-commerce Solutions",
		"Responsive Design",
		"Content Marketing",
		"Branding Services",
		"Mobile App Development",
		"Search Engine Optimization",
		"Web Analytics",
		"User Experience (UX) Design",
		"Conversion Optimization",
		"Custom Web Solutions",
	],
	authors: { name: "WebFlexrr" },
	creator: "Tech Team of WebFlexrr",
	publisher: "WebFlexrr Labs",
	openGraph: {
		title: "WebFlexrr Labs",
		description:
			"WebFlexrr Digital Services | Empowering Your Online Presence with Expert Web Development and Strategic Digital Marketing Solutions",
		url: "https://www.webflexrr.com",
		siteName: "WebFlexrr Labs",
		images: [
			{
				url: "/logos/logo2.png",
				width: 1200,
				height: 630,
				alt: "WebFlexrr",
			},
		],
		type: "website",
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				// className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
				className={`dark antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
