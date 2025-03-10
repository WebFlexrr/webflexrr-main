"use client";
import React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/components/ui/avatar";
import Link from "next/link";

// Portfolio images data
const portfolioImages = [
	{
		id: 1,
		src: "/web/website1.png",
		alt: "Digital Treasures Website",
	},
	{
		id: 2,
		src: "/web/website2.png",
		alt: "Premium Template Design",
	},
	{
		id: 3,
		src: "/web/website4.png",
		alt: "Developer Portfolio",
	},
	{
		id: 4,
		src: "/web/website4.png",
		alt: "Developer Portfolio",
	},
	{
		id: 5,
		src: "/web/website4.png",
		alt: "Developer Portfolio",
	},
];

const HeroSection = () => {
	return (
		<section className="relative flex h-auto w-full flex-col items-center justify-center py-20 md:pt-20 lg:pt-40">
			{/* Hero Content */}
			<div className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center px-7 text-center md:items-center md:px-14 xl:px-20">
				<span className="mb-4 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-400">
					Introducing Webflexrr Labs
				</span>

				<h1 className="mb-4 text-white">
					We Ship <span className="text-pink-500">Websites</span> that <br />
					Standout Everywhere
				</h1>

				<p className="mb-8 text-gray-400">
					Helping Startup & SaaS Founders Build Their Dream Products Faster.
				</p>

				{/* <button className="mb-12 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
					Book A friendly call
					<span role="img" aria-label="wave">
						👋
					</span>
				</button> */}
				<div className="mb-12">
					<CallToActionButton />
				</div>

				{/* Customer Avatars */}
				<div className="z-10 flex items-center gap-2">
					<AvatarGroup className="flex items-center" max={3}>
						<Avatar className="h-11 w-11">
							<AvatarImage src="/assets/avatar1.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="h-11 w-11">
							<AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="h-11 w-11">
							<AvatarImage src="/assets/avatar2.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="h-11 w-11">
							<AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</AvatarGroup>

					<span className="text-gray-400">15+ Happy Customers</span>
				</div>
			</div>

			{/* Portfolio Marquee */}
			<div className="relative mt-20 w-full overflow-hidden">
				{/* First Row - Left to Right */}
				<div className="mb-4">
					<Swiper
						modules={[Autoplay]}
						spaceBetween={24}
						slidesPerView={1}
						loop={true}
						speed={4000}
						allowTouchMove={false}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						breakpoints={{
							320: { slidesPerView: 1.5 },
							640: { slidesPerView: 1.5 },
							768: { slidesPerView: 2.5 },
							1024: { slidesPerView: 3.5 },
						}}
						className="-ml-[5%] !w-[110%]"
					>
						{portfolioImages.map((image) => (
							<SwiperSlide key={image.id}>
								<div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800">
									{/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
									<Image
										src={image.src}
										alt={image.alt}
										fill
										quality={6}
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Second Row - Right to Left */}
				{/* <div>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={24}
						slidesPerView={4}
						loop={true}
						speed={15000}
						allowTouchMove={false}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
							reverseDirection: true,
						}}
						breakpoints={{
							320: { slidesPerView: 1.5 },
							640: { slidesPerView: 2.5 },
							768: { slidesPerView: 3.5 },
							1024: { slidesPerView: 4.5 },
						}}
						className="-ml-[5%] !w-[110%]"
					>
						{portfolioImages.reverse().map((image) => (
							<SwiperSlide key={image.id}>
								<div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-800">
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div> */}
			</div>
			<span className="text-foreground-500 mx-auto my-4 flex flex-col gap-2 text-2xl text-white md:text-lg lg:flex-row">
				<span className="">We use industry standard technologies</span>
				<span className="flex flex-wrap justify-center">
					<span>
						<Link
							href={"https://www.figma.com"}
							className="text-foreground mx-2 flex items-center justify-center gap-1 font-bold"
						>
							<Image
								src={"/tech-logos/figma.png"}
								width={20}
								height={20}
								alt={"Figma logo"}
								className="h-[20px] w-[20px]"
							/>
							Figma
						</Link>
					</span>
					,
					<span>
						<Link
							href={"https://www.figma.com"}
							className="text-foreground mx-2 flex items-center justify-center gap-1 font-bold"
						>
							<Image
								src={"/tech-logos/react.png"}
								width={20}
								height={20}
								alt={"Figma logo"}
								className="h-[20px] w-[20px]"
							/>
							React
						</Link>
					</span>
					and{" "}
					<span>
						<Link
							href={"https://www.figma.com"}
							className="text-foreground mx-2 flex items-center gap-1 font-bold"
						>
							<Image
								src={"/tech-logos/framer.png"}
								width={30}
								height={30}
								alt={"Figma logo"}
								className="h-[30px] w-[30px]"
							/>
							Framer
						</Link>
					</span>
				</span>
			</span>
		</section>
	);
};

export default HeroSection;
