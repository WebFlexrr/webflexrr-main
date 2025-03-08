"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Heading from "@/components/SectionHeading";
import toast, { Toaster } from "react-hot-toast";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail } from "lucide-react";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { submitFormActions } from "@/lib/server/enquiryForm";

const formSchema = z.object({
	fullName: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	message: z.string().min(2).max(50),
});

const ContactSection = (): React.JSX.Element => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			// await sendEmailActions(values);
			await submitFormActions(values);
			toast.success("Mail Successfully sent!");
		} catch (error) {
			toast.error("Error! Email was not sent, please retry.");
			console.log(error);
		}
	}

	return (
		<section id={"contact"} className="relative h-auto w-full">
			<Toaster position="bottom-center" reverseOrder={true} />
			<section className="mx-auto w-full max-w-5xl space-y-10 px-5 py-20 md:px-10 lg:py-24">
				<Heading
					heading={"Fill out the form and make things happen"}
					subHeading={"Contact Us"}
				/>
				<section className="flex h-auto w-full flex-col gap-16 p-5">
					<Card className="mx-auto w-full max-w-lg rounded-3xl bg-[#0A0A0B]/70 backdrop-blur-xl">
						{/* Gradient Background */}
						<div
							className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-[#1a1f35] to-[#0c1322]`}
						/>
						<CardHeader>
							<div className="z-10 flex w-full gap-2 rounded-full bg-slate-700 p-2">
								<div className="flex w-1/2 gap-2">
									<Link
										href={"mailto:contact@webflexrr.com"}
										className="bg-primary flex h-12 w-12 items-center justify-center rounded-full"
									>
										<Mail />
									</Link>
									<div className="flex flex-col">
										<span className="font-space-grotesk">EMAIL</span>
										<span className="text-sm">contact@webflexrr.com</span>
									</div>
								</div>
								<Separator orientation="vertical" />
								<div className="flex w-1/2 gap-2">
									<Link
										href={"telto:9674128921"}
										className="bg-primary flex h-12 w-12 items-center justify-center rounded-full"
									>
										<Mail />
									</Link>
									<div className="flex flex-col">
										<span className="font-space-grotesk">CALL US</span>
										<span className="text-sm">9674128921</span>
									</div>
								</div>
							</div>
						</CardHeader>
						<CardContent className="z-10 flex w-full flex-col">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="w-full space-y-6 rounded-3xl bg-slate-700 p-5"
								>
									<FormField
										control={form.control}
										name="fullName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input
														className="rounded-lg bg-white text-black"
														placeholder="Your name"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														type="email"
														className="rounded-lg bg-white text-black"
														placeholder="Your email"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Message</FormLabel>
												<FormControl>
													<Textarea
														placeholder="Write your message"
														className="resize-none rounded-lg bg-white text-black"
														{...field}
													/>
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>
									<Button className="w-full text-white" type="submit">
										Submit
									</Button>
								</form>
							</Form>
						</CardContent>
					</Card>
				</section>
			</section>
		</section>
	);
};

export default ContactSection;
