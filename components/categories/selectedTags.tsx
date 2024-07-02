"use client";
import { getSelectedTags, removeUrlParam } from "@/helpers/urlHelpers";
import TagItem from "./tagItem";

interface IProps {
  initialTags?: string[];
}

export async function SelectedTags({ initialTags }: IProps) {
  const tags = getSelectedTags();

  const allTags = [...tags, ...initialTags!];

  const renderTag = (tag: string) => <TagItem tag={tag} />;

  if (!allTags.length) return null;

  return (
    <section
      id="selected-tags"
      className="flex max-w-7xl flex-wrap gap-4 justify-start mx-auto"
    >
      <div className="flex gap-2"> {allTags.map(renderTag)}</div>
    </section>
  );
}
