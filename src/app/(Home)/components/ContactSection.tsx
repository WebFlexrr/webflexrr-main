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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmailActions } from "@/lib/server/sendEmail";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
			await sendEmailActions(values);
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
					<Card className="mx-auto w-full max-w-xl rounded-lg bg-[#0A0A0B]/70 backdrop-blur-xl">
						<CardHeader>
							<div className="flex w-full gap-2 rounded-full bg-slate-700 p-2">
								<div className="flex w-1/2 gap-2">
									<span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
										<Mail />
									</span>
									<div className="flex flex-col">
										<span className="font-space-grotesk">EMAIL</span>
										<span>contact@webflexrr.com</span>
									</div>
								</div>
								<Separator orientation="vertical" />
								<div className="flex w-1/2 gap-2">
									<span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
										<Mail />
									</span>
									<div className="flex flex-col">
										<span>CALL US</span>
										<span>9674128921</span>
									</div>
								</div>
							</div>
						</CardHeader>
						<CardContent className="flex w-full flex-col">
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="w-2/3 space-y-6"
								>
									<FormField
										control={form.control}
										name="fullName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input placeholder="Your name" {...field} />
												</FormControl>
												<FormDescription>
													This is your public display name.
												</FormDescription>
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
														placeholder="Your email"
														{...field}
													/>
												</FormControl>
												<FormDescription>
													We'll never share your email.
												</FormDescription>
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
														className="resize-none"
														{...field}
													/>
												</FormControl>
												<FormDescription>
													You can <span>@mention</span> other users and
													organizations.
												</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button type="submit">Submit</Button>
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
