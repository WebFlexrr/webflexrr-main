"use server";

import { Blogs, Project } from "@/types/sanity";
import { sanityFetch } from "../lib/client";
import { FAQ_Query, PROJECT_QUERY } from "./queries";

export const getProjectsActions = async () => {
	return await sanityFetch<Project[]>({ query: PROJECT_QUERY });
};

export const getBlogActions = async () => {
	return await sanityFetch<Blogs[]>({ query: FAQ_Query });
};
