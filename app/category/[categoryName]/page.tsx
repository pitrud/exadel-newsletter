import { getCategoryTags } from "@/actions/main";
import Categories from "@/components/categories";
import Header from "@/components/header";
import LatestArticlesSection from "@/components/latestArticles";
import PopularArticlesSection from "@/components/popularArticles";
import RecommendedArticlesSection from "@/components/recommendedArticles";
import { notFound } from "next/navigation";

export default async function CategoryItem({ params }: any) {
  const categoryName = params.categoryName;
  if (!categoryName) {
    notFound();
  }

  const tags = await getCategoryTags(categoryName);

  return (
    <>
      <>
        <Header />
        <Categories elementsToShow="tags" initialTags={tags} />
        <PopularArticlesSection customTags={tags} />
        <RecommendedArticlesSection customTags={tags} />
        <LatestArticlesSection customTags={tags} />
      </>
    </>
  );
}
