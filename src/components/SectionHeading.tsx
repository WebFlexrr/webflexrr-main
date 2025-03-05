import React, { type FC } from "react";
interface HeadingProps {
	heading: string | null;
	subHeading: string;
	para?: string;
}

const SectionHeading: FC<HeadingProps> = ({ heading, subHeading, para }) => {
	return (
		<section className="mx-auto  mt-10 flex h-auto w-full max-w-4xl flex-col items-center gap-4 text-center text-white">
			{heading != null ? (
				<>
					{/* <span className="text-primary flex gap-3 text-xl font-semibold">
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400">
							<Star size={22} className="fill-background text-green-400" />
						</span>
						{heading}
					</span> */}
					<span className="flex gap-3 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
						<div className="rounded-full bg-background px-7 py-3 text-base">
							{subHeading}
						</div>
					</span>
					<h2 className="text-5xl font-bold text-black dark:text-white">
						{heading}
					</h2>

					<p className="max-w-lg">{para}</p>
				</>
			) : (
				<h2 className="">{heading}</h2>
			)}
		</section>
	);
};

export default SectionHeading;
