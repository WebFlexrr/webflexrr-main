import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { PRIVACY_POLICY_QUERY } from "@/sanity/actions/queries";
import NavBar from "@/components/Navbar";
import BlurredBg from "@/components/BlurredBg";
import { PortableTextComponents } from "@/components/PortableText";
import { Separator } from "@/components/ui/separator";
import { PrivacyPolicy } from "@/types/sanity";
import { PortableText } from "next-sanity";

export const metadata: Metadata = {
	title: "Privacy Policy",
};
const PrivacyPolicyPage = async () => {
	const policy = await sanityFetch<PrivacyPolicy>({
		query: PRIVACY_POLICY_QUERY,
	});

	return (
		<main className="pt-16">
			<BlurredBg />
			<NavBar />
			<section className="relative mx-auto h-auto w-full max-w-3xl px-5 py-28">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h4>Privacy Policy</h4>
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
				<div className="text-sm">
					<PortableText
						value={policy.policy!}
						components={PortableTextComponents}
					/>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default PrivacyPolicyPage;
