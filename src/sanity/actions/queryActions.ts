"use server";

import { sanityFetch } from "../lib/client";
import { FAQ_Query, PROJECT_QUERY } from "./queries";

export const getFaqActions = async () => {
	return await sanityFetch<getAllFaq[]>({ query: FAQ_Query });
};

export const getProjectsActions = async () => {
	return await sanityFetch<getAllProjects[]>({ query: PROJECT_QUERY });
};
