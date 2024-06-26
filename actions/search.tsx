import { Tag } from "@/types/main";

export async function search(searchPhrase: string): Promise<Tag[]> {
  const res = await fetch(
    `https://newsletter.exadel.com/api/v1/tags?queryString=${searchPhrase}`
  );

  if (!res.ok) {
    //  throw new Error('Failed to fetch data')
    return [];
  }

  return res.json();
}
