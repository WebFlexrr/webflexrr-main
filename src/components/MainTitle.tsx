"use client";
import React, { type FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MainTitleProps {
	heading: string;
}
const MainTitle: FC<MainTitleProps> = ({ heading }) => {
	const pathname = usePathname();
	const titlePathname = pathname.split("/").join(" / ");
	return (
		<section className="relative h-auto w-full">
			<div className="bg-background3 flex h-auto w-full justify-center px-8 md:px-5 xl:pt-0">
				<section className="mt-16 flex h-auto w-full max-w-[100rem] justify-center py-16 md:justify-start md:pt-24 lg:mt-24 xl:pt-28 xl:pb-28">
					<section className="flex h-auto w-fit flex-col items-center gap-4 md:items-start">
						<h1>{heading}</h1>
						<p className="">
							<Link href={"/"} className="text-primary">
								Home
							</Link>
							{titlePathname}
						</p>
					</section>
				</section>
			</div>
		</section>
	);
};

export default MainTitle;
