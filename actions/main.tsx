import { Category, PostResponse } from "@/types/main";
import slugify from "slugify";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch("https://newsletter.exadel.com/api/v1/sets");

  if (!res.ok) {
    //  throw new Error('Failed to fetch data')
    return [];
  }

  return res.json();
}

export async function getCategoryTags(categoryName: string): Promise<string[]> {
  const categories = await getCategories();
  const categoryDetail = categories.find(
    (category) => slugify(category.name, { lower: true }) === categoryName
  );

  if (!categoryDetail) {
    //  throw new Error('Failed to fetch data')
    return [];
  }

  return categoryDetail.tags.map((tag) => tag.name);
}

export async function getPosts(
  customTag?: string,
  customTags?: string[]
): Promise<PostResponse> {
  const res = await fetch(
    `https://newsletter.exadel.com/api/v1/posts?page=0&size=20${
      customTag ? `&${customTag}=true` : ""
    }${customTags ? `&tags=${customTags.join(",")}` : ""}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch dataa");
  }

  return res.json();
}
