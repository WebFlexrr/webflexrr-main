"use client";
import React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="relative mb-20 flex h-auto w-full flex-col items-center justify-center px-7 pt-20 md:pt-20 lg:h-[100vh] lg:pt-20">
      {/* Hero Content */}
      <div className="mx-auto flex h-fit w-full max-w-[90rem] flex-col items-center text-center md:items-center md:px-14 xl:px-20">
        <span className="mb-4 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-400">
          Introducing Webflexrr Labs
        </span>

        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
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
        <div className="z-20 flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="text-gray-400">15+ Happy Customers</span>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="mt-20 grid w-full max-w-[90rem] grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-video w-full overflow-hidden rounded-lg bg-gray-800"
          >
            {/* Replace with actual images */}
            <div className="h-full w-full bg-gray-700" />
          </div>
        ))}
      </div>
      {/* <span className="text-foreground-500 mx-auto my-4 flex flex-col gap-2 text-2xl md:text-lg lg:flex-row">
				<motion.span
					initial={{ opacity: 0, x: "-20%", y: "30%" }}
					animate={{ opacity: 1, x: "0", y: "0" }}
					transition={{ duration: 0.7, delay: 0.6, ease: "circInOut" }}
					className=""
				>
					We use industry standard technologies
				</motion.span>
				<motion.span
					initial={{ opacity: 0, x: "20%", y: "30%" }}
					animate={{ opacity: 1, x: "0", y: "0" }}
					transition={{ duration: 0.7, delay: 0.6, ease: "circInOut" }}
					className="flex flex-wrap justify-center"
				>
					<motion.span whileHover={{ y: -10 }}>
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
					</motion.span>
					,
					<motion.span whileHover={{ y: -10 }}>
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
					</motion.span>
					and{" "}
					<motion.span whileHover={{ y: -10 }}>
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
					</motion.span>
				</motion.span>
			</span> */}
    </section>
  );
};

export default HeroSection;
