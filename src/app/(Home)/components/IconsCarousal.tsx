"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const techStack = [
	{ name: "AWS", logo: "/com-logos/aws.png" },
	{ name: "Redis", logo: "/com-logos/Redis.png" },
	{ name: "Sanity", logo: "/com-logos/sanity.png" },
	{ name: "Framer", logo: "/com-logos/framer.png" },
	{ name: "Node JS", logo: "/com-logos/node-js.png" },
	{ name: "Next.js", logo: "/com-logos/nextjs.png" },
	{ name: "React", logo: "/com-logos/react.png" },
];

const IconsCarousal = () => {
	return (
		<div className="mx-auto flex w-full max-w-7xl flex-col items-center py-20">
			<h4 className="mb-8">Technologies We Use</h4>

			<div className="relative w-full">
				<div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r to-transparent" />
				<div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l to-transparent" />

				<Swiper
					spaceBetween={30}
					slidesPerView={5}
					loop={true}
					speed={3000}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
						reverseDirection: false,
					}}
					modules={[Autoplay]}
					className="mySwiper w-full"
				>
					{techStack.map((tech, index) => (
						<SwiperSlide
							key={index}
							className="hover:bg-primary relative flex aspect-video w-21 items-center justify-center rounded-xl border px-5 grayscale transition-all duration-300 ease-in-out hover:grayscale-0 md:w-32"
						>
							<div className="w-8 bg-red-500">
								<Image
									src={tech.logo}
									alt={tech.name}
									fill
									className="object-contain"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default IconsCarousal;
