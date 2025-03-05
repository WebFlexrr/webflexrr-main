import { defineQuery } from "next-sanity";

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

export const PROJECT_QUERY = defineQuery(`*[_type=="project"]{
      title,
      link,
      "thumbnail":thumbnail.asset->url,
      _updatedAt
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

export const PRIVACY_POLICY_QUERY =
	defineQuery(`*[_type=="policies" && slug.current == "privacyPolicy" ][0]{
  			title,
    		"slug": slug.current,
    		content,
    		_updatedAt
		}`);

export const TERMS_CONDITIONS_QUERY = defineQuery(
	`*[_type=="policies" && slug.current == "term&Conditions" ][0]{
  			title,
    		"slug": slug.current ,
    		content,
    		_updatedAt
		}`
);

export const REFUND_POLICY_QUERY =
	defineQuery(`*[_type=="policies" && slug.current == "refundPolicy" ][0]{
            title,
            "slug": slug.current ,
            content,
			_updatedAt
        }`);

export const ALL_BLOG_QUERY = defineQuery(`*[_type=="blogs"]{
      _id,
      title,
      "slug":slug.current,
      description,
      "thumbnail":thumbnail.asset->url,
      category,
      content,
      _createdAt,
      _updatedAt
    }`);

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
