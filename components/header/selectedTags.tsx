"use client";

import { getSelectedTags, removeUrlParam } from "@/helpers/urlHelpers";

import { usePathname, useSearchParams } from "next/navigation";

export function SelectedTagsInfo() {
  const searchParams = useSearchParams();

  const renderTag = (tag: string) => (
    <button
      onClick={() => removeUrlParam(tag)}
      className=" bg-blue-medium text-blue-dark  text-xs font-light py-1 px-2 text-center dark:bg-gray-dark dark:border dark:text-white"
    >
      {tag} <span className="text-blue-dark ml-1">&#x2715;</span>
    </button>
  );
  const tags = getSelectedTags();

  if (!tags.length) return null;

  return (
    <section
      id="selected-tags"
      className="flex max-w-7xl flex-wrap gap-4 justify-start mx-auto"
    >
      <div className="flex gap-2"> {tags.map(renderTag)}</div>
    </section>
  );
}
