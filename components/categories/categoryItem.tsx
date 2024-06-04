import { Category } from "@/types/main";
import Link from "next/link";
import slugify from "slugify";

const CategoryItem = ({ category }: { category: Category }) => (
  <Link
    key={category.id}
    href={`/category/${slugify(category.name, { lower: true })}`}
    className="bg-blue-medium text-blue-dark uppercase text-xs font-light py-2 w-28 md:w-32 text-center dark:bg-gray-dark dark:border dark:text-white"
  >
    {category.name}
  </Link>
);

export default CategoryItem;
