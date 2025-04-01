import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import BlurredBg from "@/components/BlurredBg";
import ProjectsSection from "./components/ProjectsSection";
import PlanSection from "./components/PlanSection";
import FaqSection from "./components/FaqSection";
// import ClientFeedBack from "./components/ClientFeedBack";
// import Footer from "@/components/Footer";
import CallToActionBanner from "../../components/CallToActionBanner";
import ContactSection from "./components/ContactSection";
import SmoothScrolling from "@/components/SmoothScrolling";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import { getHomePageMetadata } from "@/sanity/actions/metadataQueryActions";
import IconsCarousal from "./components/IconsCarousal";
import NavBar2 from "@/components/Navbar2";

import Footer2 from "@/components/Footer2";

export async function generateMetadata(): Promise<Metadata> {
	const homePage = await getHomePageMetadata();

	console.log(homePage);

	// console.log(
	// 	"Open graph Image",
	// 	imageUrlFor(homePage.seo?.openGraph?.image as SanityImageSource)
	// 		.blur(50)
	// 		.url()
	// );
	return {
		title: homePage.seo?.metaTitle,
		description: homePage.seo?.metaDescription,
		keywords: homePage.seo?.seoKeywords,
		openGraph: {
			title: homePage.seo?.openGraph?.title,
			description: homePage.seo?.openGraph?.description,
			url: homePage.seo?.openGraph?.url,
			siteName: homePage.seo?.openGraph?.siteName,
			images: [
				{
					url: imageUrlFor(
						homePage.seo?.openGraph?.image as SanityImageSource
					).url(),
					width: 1200,
					height: 630,
					alt: "WebFlexrr",
				},
			],
		},
	};
}

const HomePage = async () => {
	return (
		<SmoothScrolling>
			<main className="h-fit p-0">
				<BlurredBg />
				{/* <AnnouncementBar /> */}
				<NavBar2 />
				<HeroSection />
				<AboutSection />
				<IconsCarousal />
				<Services />
				<ProjectsSection />
				<PlanSection />
				<FaqSection />
				{/* <ClientFeedBack /> */}
				<CallToActionBanner />
				{/* <GridSmallBackgroundDemo/> */}
				<ContactSection />
				<Footer2 />
			</main>
		</SmoothScrolling>
	);
};

export default HomePage;
