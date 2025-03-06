import AnnouncementBar from "@/components/AnnouncementBar";
import NavBar from "@/components/Navbar";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import IconsCarousal from "./components/IconsCarousal";
import Services from "./components/Services";
import BlurredBg from "@/components/BlurredBg";
import ProjectsSection from "./components/ProjectsSection";
import PlanSection from "./components/PlanSection";
import FaqSection from "./components/FaqSection";
import ClientFeedBack from "./components/ClientFeedBack";
import Footer from "@/components/Footer";
import CallToActionBanner from "./components/CallToActionBanner";
import ContactSection from "./components/ContactSection";

const HomePage = () => {
	return (
		<main className="relative overflow-x-hidden p-0">
			<BlurredBg />
			<AnnouncementBar />
			<NavBar />
			<HeroSection />
			<IconsCarousal />
			<AboutSection />
			<Services />
			<ProjectsSection />
			<PlanSection />
			<FaqSection />
			<ClientFeedBack />
			<CallToActionBanner />
			<ContactSection />
			<Footer />
		</main>
	);
};

export default HomePage;
