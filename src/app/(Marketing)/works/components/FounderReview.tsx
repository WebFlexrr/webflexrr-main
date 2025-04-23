"use client";

import Image from "next/image";

const FounderReview = () => {
	return (
		<section className="dark bg-background relative px-4 py-32 md:px-8">
			<div className="shadow-primary/40 mx-auto grid max-w-4xl grid-cols-4 rounded-3xl border bg-[#0A0A0B]/70 p-12 text-center shadow-2xl">
				<section className="col-span-1 flex w-full items-center justify-center">
					<Image
						src={""}
						width={80}
						height={80}
						alt={"Client Name"}
						className="h-25 w-25 rounded-full border"
					/>
				</section>
				<section className="col-span-3 flex w-full flex-col gap-5">
					<p className="font-inter text-left text-2xl leading-8 italic antialiased">
						"I appreciate the hard work and dedication your team has done for
						this app. you guys delivered an outstanding product and made the
						process seamless."
					</p>
					<section className="flex w-full flex-col items-start gap-0.5">
						<h5 className="font-bold text-white">Matthew West</h5>
						<p className="text-base text-white/40">
							CEO - Boom Journal (1m+ Followers)
						</p>
					</section>
				</section>
			</div>
		</section>
	);
};

export default FounderReview;
