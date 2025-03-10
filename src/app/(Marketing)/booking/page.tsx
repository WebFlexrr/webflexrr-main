import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import BlurredBg from "@/components/BlurredBg";
import AnnouncementBar from "@/components/AnnouncementBar";

import BookingCalender from "./BookingCalender";

export const metadata: Metadata = {
	title: {
		default: "Blog",
		template: "%s | WebFlexrr Digital Services",
	},
	description:
		"Explore our latest insights, tips, and stories about web development, design, and digital services",
};

const BookingPage = async (): Promise<React.JSX.Element> => {
	// const featuredBlog = blogs[0];

	return (
		<main>
			<BlurredBg />
			<AnnouncementBar />
			<NavBar />

			<section className="relative flex h-auto w-full flex-col items-center justify-center py-20">
				<section className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center px-7 text-center md:items-center md:px-14 xl:px-20">
					<section className="mx-auto mt-10 flex h-auto w-full max-w-2xl flex-col items-center gap-4 text-center">
						<h1>Let's Start A Project: Schedule Your Intro</h1>

						<p className="mx-auto max-w-2xl text-lg text-purple-100/80">
							Discover our latest thoughts on web development, design trends,
							and digital innovation
						</p>
					</section>
					<section className="mt-12 w-full">
						<BookingCalender />
					</section>
				</section>
			</section>
			<Footer />
		</main>
	);
};

export default BookingPage;
