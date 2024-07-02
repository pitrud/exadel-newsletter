import MainCategories from "./mainCategories";
import { SelectedTags } from "./selectedTags";

interface IProps {
  elementsToShow: "categories" | "tags";
  initialTags?: string[];
}
const Categories = ({ elementsToShow, initialTags }: IProps) => {
  return elementsToShow === "categories" ? (
    <MainCategories />
  ) : (
    <SelectedTags initialTags={initialTags} />
  );
};

export default Categories;
