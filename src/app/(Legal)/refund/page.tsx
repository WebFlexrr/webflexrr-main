import BlurredBg from "@/components/BlurredBg";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { PortableTextComponents } from "@/components/PortableText";
import { Separator } from "@/components/ui/separator";
import { REFUND_POLICY_QUERY } from "@/sanity/actions/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { RefundPolicy } from "@/types/sanity";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";

export const metadata: Metadata = {
	title: "Refund Policy",
};

const RefundPolicyPage = async () => {
	const policy = await sanityFetch<RefundPolicy>({
		query: REFUND_POLICY_QUERY,
	});
	return (
		<main className="pt-16">
			<BlurredBg />
			<NavBar />
			<section className="mx-auto h-auto w-full max-w-3xl px-5 py-28">
				<section className="flex w-full flex-col justify-start space-y-5">
					<h4>Refund Policy</h4>
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
					value={policy.policy!}
					components={PortableTextComponents}
				/>
			</section>
			<Footer />
		</main>
	);
};

export default RefundPolicyPage;
