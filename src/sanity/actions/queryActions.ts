"use server";

import { Blogs, Project } from "@/types/sanity";
import { sanityFetch } from "../lib/client";
import {
	BLOG_QUERY,
	GET_SINGLE_BLOG_QUERY,
	PROJECTS_QUERY,
	SINGLE_PROJECT_QUERY,
} from "./queries";

//Projects
export const getProjects = async () =>
	await sanityFetch<Project[]>({ query: PROJECTS_QUERY });

export const getSingleProject = async (slug: string) =>
	await sanityFetch<Project>({ query: SINGLE_PROJECT_QUERY(slug) });

//Blogs
export const getBlogs = async () =>
	await sanityFetch<Blogs[]>({ query: BLOG_QUERY });

export const getSingleBlog = async (slug: string) =>
	await sanityFetch<Blogs>({
		query: GET_SINGLE_BLOG_QUERY(slug),
	});
