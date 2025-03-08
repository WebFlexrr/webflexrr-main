import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { TERMS_CONDITIONS_QUERY } from "@/sanity/actions/queries";

import BlurredBg from "@/components/BlurredBg";
import NavBar from "@/components/Navbar";
import { PortableTextComponents } from "@/components/PortableText";
import { Separator } from "@radix-ui/react-separator";
import { TermsConditions } from "@/types/sanity";
import { PortableText } from "next-sanity";

export const metadata: Metadata = {
	title: "Term & Condition",
};
const Terms = async () => {
	const policy = await sanityFetch<TermsConditions>({
		query: TERMS_CONDITIONS_QUERY,
	});
	return (
		<main className="pt-16">
			<BlurredBg />
			<NavBar />
			<section className="relative mx-auto h-auto w-full max-w-2xl px-5 py-28">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h4>Terms & Conditions</h4>
					<span className="dark:text-white">
						Last updated:{" "}
						{new Date(policy._updatedAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</span>
				</section>
				<Separator className="my-4" />
				<PortableText
					value={policy.terms!}
					components={PortableTextComponents}
				/>
			</section>

			<Footer />
		</main>
	);
};

export default Terms;
