"use client";
import SectionHeading from "@/components/SectionHeading";
import React, { FC } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface FeedBackCardProps {
	clientName: string;
	clientImage: string;
	clientAgency: string;
	message: string;
}

const feedBacks = [
	{
		clientName: "peter Parker2",
		clientImage:
			"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
		clientAgency: "Atom",
		message: `“This AI Driven Developement 
consultation report was eye-opening” `,
	},
	{
		clientName: "peter Parker3",
		clientImage:
			"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
		clientAgency: "Atom",
		message: `“This AI Driven Developement 
consultation report was eye-opening” `,
	},
	{
		clientName: "peter Parker4",
		clientImage:
			"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
		clientAgency: "Atom",
		message: `“This AI Driven Developement 
consultation report was eye-opening” `,
	},
	{
		clientName: "peter Parker5",
		clientImage:
			"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
		clientAgency: "Atom",
		message: `“This AI Driven Developement 
consultation report was eye-opening” `,
	},
	{
		clientName: "peter Parker",
		clientImage:
			"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
		clientAgency: "Atom",
		message: `“This AI Driven Developement 
consultation report was eye-opening” `,
	},
];
const ClientFeedBack = () => {
	return (
		<section id={"faq"} className="relative h-auto w-full">
			<section className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 py-20">
				<SectionHeading
					heading={"What our clients Say"}
					subHeading={"Client Experience"}
				/>
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
					{feedBacks.map((feedback) => (
						<SwiperSlide key={feedback.clientName}>
							<FeedBackCard
								key={feedback.clientName}
								clientName={feedback.clientName}
								clientImage={feedback.clientImage}
								clientAgency={feedback.clientAgency}
								message={feedback.message}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				{/* <section className="mx-auto mb-24 mt-20 flex h-auto w-full max-w-lg gap-10 sm:px-10 xl:max-w-none xl:grid-cols-3 xl:px-0">
					{feedBacks.map((feedback) => (
						<FeedBackCard
							key={feedback.clientName}
							clientName={feedback.clientName}
							clientImage={feedback.clientImage}
							clientAgency={feedback.clientAgency}
							message={feedback.message}
						/>
					))}
				</section> */}
			</section>
		</section>
	);
};

export default ClientFeedBack;

const FeedBackCard: FC<FeedBackCardProps> = ({
	clientName,
	clientImage,
	clientAgency,
	message,
}) => {
	return (
		<Card className="border">
			<CardHeader className="flex gap-3">
				<p>{message}</p>
			</CardHeader>
			<CardContent>
				<section className="flex items-center justify-start gap-2">
					<Avatar>
						<AvatarImage src={clientImage} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-2">
						<div>{clientName}</div>
						<div>{clientAgency}</div>
					</div>
				</section>
			</CardContent>
		</Card>
	);
};
