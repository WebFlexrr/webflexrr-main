"use client";

import Image from "next/image";
import { FC } from "react";

interface FounderReviewProps {
	review?: {
		_id: string;
		name: string;
		role: string;
		image: string;
		message: string;
	};
}
const FounderReview: FC<FounderReviewProps> = ({ review }) => {
	return (
		<section className="dark bg-background relative px-4 py-32 md:px-8">
			{review && (
				<div className="shadow-primary/40 mx-auto grid max-w-4xl grid-cols-1 gap-14 rounded-3xl border bg-[#0A0A0B]/70 p-12 text-center shadow-2xl lg:grid-cols-4">
					<section className="col-span-1 flex w-full items-center justify-center">
						<Image
							src={review.image || ""}
							width={80}
							height={80}
							alt={"Client Name"}
							className="h-25 w-25 rounded-full border"
						/>
					</section>
					<section className="col-span-1 flex w-full flex-col gap-5 lg:col-span-3">
						<p className="font-inter text-left text-2xl leading-8 italic antialiased">
							{review.message}
						</p>
						<section className="flex w-full flex-col items-start gap-0.5">
							<h5 className="text-2xl font-bold text-white">{review.name}</h5>
							<p className="text-left text-base text-white/40">{review.role}</p>
						</section>
					</section>
				</div>
			)}
		</section>
	);
};

export default FounderReview;
