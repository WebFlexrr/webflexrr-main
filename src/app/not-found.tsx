import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "404 Error",
};

const NotFound = () => {
	return (
		<main className="relative h-full w-full">
			<div
				className="absolute h-full w-full bg-black bg-cover opacity-10"
				style={{ backgroundImage: "url('/assets/background.jpg')" }}
			/>
			<section className="relative flex h-full w-full items-center justify-center px-5">
				<section className="flex flex-col items-center">
					<Image
						src={"/assets/404-image.png"}
						width={"750"}
						height={"0"}
						alt={"404 image"}
						priority={true}
						className=""
					/>
					<h1>Page Not Found</h1>
					<Link
						href={"/"}
						className="group border-secondary text-secondary hover:border-primary hover:text-primary mt-10 flex h-fit w-fit items-center gap-3 border px-7 py-3 transition duration-500 ease-in-out"
					>
						<div className="bg-primary group-hover:bg-secondary h-2 w-2 rounded-full transition duration-500 ease-in-out"></div>
						Back Home
					</Link>
				</section>
			</section>
		</main>
	);
};
export default NotFound;
