import LatestArticlesSection from "@/components/latestArticles";
import Categories from "@/components/categories";
import Newsletter from "@/components/newsletter";
import PopularArticlesSection from "@/components/popularArticles";
import RecommendedArticlesSection from "@/components/recommendedArticles";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header withLogo />
      <Categories elementsToShow="categories" />
      <PopularArticlesSection />
      <RecommendedArticlesSection />
      <Newsletter />
      <LatestArticlesSection />
    </>
  );
}
