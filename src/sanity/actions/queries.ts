import { defineQuery } from "next-sanity";

export const HOME_PAGE_METADATA_QUERY =
	defineQuery(`*[_type=="pages" && route=="/" ][0]{
  name,route,seo,_id,_type,_createdAt,_updatedAt
}`);
export const WORK_PAGE_METADATA_QUERY =
	defineQuery(`*[_type=="pages" && route=="/work" ][0]{
  name,route,seo,_id,_type,_createdAt,_updatedAt
}`);
export const BLOGS_PAGE_METADATA_QUERY =
	defineQuery(`*[_type=="pages" && route=="/blogs" ][0]{
  name,route,seo,_id,_type,_createdAt,_updatedAt
}`);

export const PROJECT_QUERY = defineQuery(`*[_type=="project"]{
      title,
      link,
      "thumbnail":thumbnail.asset->url,
      _updatedAt
    }`);
export const BLOG_QUERY = defineQuery(`*[_type=="blogs"]`);

export const FAQ_Query = defineQuery(
	`*[_type=="faq"]{id,question,ans,content,_updatedAt}`
);

export const PLANS_Query =
	defineQuery(`*[_type=="plans"]{id,name,highlighted,description,
  price,
  service{
    serviceName,
      isSelected
  }[],
  bookingLink
}`);

export const FEEDBACK_Query = defineQuery(`*[_type=="feedback" ]{
      _id,
      clientName,
      "slug":slug.current,
      clientPosition,
      rating,
      message,
      "image":image.asset->url,
      _type
    }`);

export const PRIVACY_POLICY_QUERY = defineQuery(`*[_type=="privacyPolicy"][0]`);

export const TERMS_CONDITIONS_QUERY = defineQuery(
	`*[_type=="termsConditions"][0]`
);

export const REFUND_POLICY_QUERY = defineQuery(`*[_type=="refundPolicy"][0]`);

export const GET_SINGLE_BLOG_QUERY = (slug: string) => {
	return defineQuery(`*[_type=="blogs" && slug.current == "${slug}"][0]{
      _id,
      title,
      "slug": slug.current,
      description,
      "thumbnail": thumbnail.asset->url,
      category,
      content,
      _createdAt,
      _updatedAt
    }`);
};
