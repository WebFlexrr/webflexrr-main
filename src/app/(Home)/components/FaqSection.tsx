import Heading from "@/components/SectionHeading";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
	const FAQ = [
		{
			key: 1,
			title: "How long does it take to complete a project?",
			answer: `It's completely based on that specific Project requirements. Rest assured, we prioritize efficiency without compromising quality to deliver your website in a timely manner.`,
		},
		{
			key: 2,
			title: "Do you offer ongoing support and maintenance services?",
			answer: `Yes, we offer support to keep your website up-to-date. Our team is available for updates, security checks, troubleshooting, and enhancements as needed.And `,
		},
		{
			key: 3,
			title: "What happens if I'm not satisfied with the final result?",
			answer: `Your satisfaction is important to us. We'll work closely with you to address any concerns and make revisions until you're happy with the outcome.`,
		},

		{
			key: 4,
			title: "How does your process work?",
			answer: `I begin by understanding your needs and goals, then create a detailed plan. I handle both design and development, progressing through structured stages—design, development, testing, and final launch—to ensure a seamless outcome.`,
		},

		{
			key: 5,
			title: "How long does it take to receive designs or prototypes?",
			answer: `Timelines vary based on the project scope. I provide regular updates and prototypes, giving you a clear view of progress and allowing for timely feedback.`,
		},
		{
			key: 6,
			title: "You can make apps using No-code?",
			answer: `We use both coded and no-coded platform for developement. But we prefer coded website or mobile apps for developement. If you want then we can.  `,
		},

		{
			key: 7,
			title: "What's your Tech Stack?",
			answer: `We primarily use React and Next.js for front-end development, with Node.js for back-end work and MongoDB, PostgresSQL and Firebase for databases. For styling, I prefer tailwindcss and sometimes leverage CSS frameworks as needed. I handle animations with Framer motion, and manage user authentication and data storage with Firebase or Supabase.For Payment processing, I will prefer client's choice but my preference is Stripe and use GitHub for version control. This stack allows me to build responsive, scalable, and maintainable applications tailored to your project's requirements.`,
		},
	];
	return (
		<section id={"faq"} className="bg-background relative h-auto w-full">
			<section className="mx-auto flex w-full max-w-4xl flex-col gap-14 px-5 py-20">
				<Heading
					heading={"FAQ"}
					subHeading={"Frequently Asked Questions ?"}
					para="Here are some commonly asked questions. If you can't find the answer you're looking for, feel free to reach out to us directly. We're here to help!"
				/>
				<section className="relative h-auto w-full">
					<Accordion type="single" collapsible className="space-y-3">
						{FAQ.map((faq, index) => (
							<AccordionItem
								key={faq.key}
								value={`item-${index}`}
								// indicator={<PlusCircle />}
								aria-label={faq.title}
								className="font-space-grotesk bg-background my-2 rounded-lg border px-5 text-left text-lg font-medium text-white antialiased"
							>
								<AccordionTrigger>
									<h5>{faq.title}</h5>
								</AccordionTrigger>
								<AccordionContent className="text-inter text-base text-black dark:text-white">
									{faq.answer}
								</AccordionContent>
								{/* <Divider className="mb-3" /> */}
							</AccordionItem>
						))}
					</Accordion>
				</section>
			</section>
		</section>
	);
};

export default FaqSection;
