import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import type { PortableTextReactComponents } from "@portabletext/react";
import type { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const ImageComponent = ({
	value,
	isInline,
}: {
	value: SanityImageAssetDocument;
	isInline: boolean;
}) => {
	// const { width, height } = getImageDimensions(value);
	console.log(value);
	return (
		<Image
			src={imageUrlFor(value).url()}
			width={isInline ? 100 : 800}
			height={0}
			alt={value.alt || " "}
			loading="lazy"
			className="my-8 object-contain"
			style={{
				// Display alongside text if image appears inside a block text span
				display: isInline ? "inline-block" : "block",
			}}
		/>
	);
};

export const PortableTextComponents: PortableTextReactComponents = {
	types: {
		image: ImageComponent,
	},
	marks: {
		strong: ({ children }: { children: ReactNode }) => (
			<strong className="font-bold">{children}</strong>
		),
		em: ({ children }: { children: ReactNode }) => (
			<em className="font-semibold">{children}</em>
		),
		code: ({ children }: { children: ReactNode }) => <code>$ {children}</code>,
		link: ({ value, children }) => {
			const target = (value?.href || "").startsWith("http")
				? "_blank"
				: undefined;
			return (
				<Link
					href={value?.href}
					target={target}
					rel={target === "_blank" ? "noindex nofollow" : undefined}
				>
					{children}
				</Link>
			);
		},
	},

	block: {
		// Ex. 1: customizing common block types
		h1: ({ children }) => (
			<h1 className="my-5 text-left text-3xl font-bold">{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className="my-4 text-left text-2xl font-bold">{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className="m-3 text-left text-xl font-bold">{children}</h3>
		),
		h4: ({ children }) => (
			<h4 className="my-2 text-left text-lg font-bold">{children}</h4>
		),
		h5: ({ children }) => (
			<h5 className="my-1 text-left text-base font-bold">{children}</h5>
		),
		h6: ({ children }) => (
			<h6 className="my-4 text-left text-sm font-bold">{children}</h6>
		),
		blockquote: ({ children }) => (
			<blockquote className="border-l-4 border-slate-500 pl-3 text-left">
				{children}
			</blockquote>
		),
		normal: ({ children }) => <p className="mb-2 text-lg">{children}</p>,
	},
	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => (
			<ul className="my-6 list-inside space-y-6 px-5">{children}</ul>
		),
		number: ({ children }) => <ol className="mt-lg">{children}</ol>,

		// Ex. 2: rendering custom lists
		checkmarks: ({ children }) => (
			<ol className="m-auto text-lg">{children}</ol>
		),
	},
	listItem: {
		// Ex. 1: customizing common list types
		bullet: ({ children }) => <li className="list-disc">{children}</li>,
		number: ({ children }) => <li className="list-decimal">{children}</li>,

		// Ex. 2: rendering custom list items
		checkmarks: ({ children }) => <li className="">✅ {children}</li>,
	},
	hardBreak: () => <br />,
	unknownMark: () => <></>,
	unknownList: () => <></>,
	unknownType: () => <></>,
	unknownBlockStyle: () => <></>,
	unknownListItem: () => <></>,
};
