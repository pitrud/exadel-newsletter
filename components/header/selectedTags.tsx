"use client";

import { getSelectedTags } from "@/helpers/urlHelpers";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function SelectedTagsInfo() {
  const router = useRouter()
  const { query } = router
  console.log('rr', router, '+,', query)
  
  const renderTag = (tag: string) => <div className="tag">{tag}</div>;
  const tags = getSelectedTags();


useEffect(() => {
  console.log('zmiaaana')
}, [tags])

  if (!tags.length) return null;

  return <div>{tags.map(renderTag)}</div>;
}
