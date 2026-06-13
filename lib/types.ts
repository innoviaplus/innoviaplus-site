export type SchemaType = "None" | "FAQPage" | "LocalBusiness" | "Service" | "Article";

export interface PageData {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  shortContent: string;
  longContent: string;
  imageUrl: string;
  imageAlt: string;
  publishDate: string;
  faqs: { question: string; answer: string }[];
  geoTags: string[];
  mapIframe: string;
  published: boolean;
  schemaType: SchemaType;
}

export interface PageListItem {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  updatedAt: string;
}
