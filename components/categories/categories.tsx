import { getCategories } from "@/actions/main";
import { Category } from "@/types/main";
import CategoryItem from "./categoryItem";

const MainCategories = async () => {
  const categories = await getCategories();

  const renderCategoryItem = (category: Category) => (
    <CategoryItem category={category} />
  );

  return (
    <section
      id="categories"
      className="flex max-w-7xl flex-wrap gap-4 justify-center mx-auto my-16"
    >
      {categories.map(renderCategoryItem)}
    </section>
  );
};

export default MainCategories;
