import LatestArticlesSection from "@/components/latestArticles";
import MainCategories from "@/components/categories";
import Newsletter from "@/components/newsletter";
import PopularArticlesSection from "@/components/popularArticles";
import RecommendedArticlesSection from "@/components/recommendedArticles";
import Header from "@/components/header";


export default function Home() {
  return (
    <>
      <Header withLogo />
      <MainCategories />
      <PopularArticlesSection />
      <RecommendedArticlesSection />
      <Newsletter />
      <LatestArticlesSection />
    </>
  );
}

