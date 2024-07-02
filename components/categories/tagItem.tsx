import { removeUrlParam } from "@/helpers/urlHelpers";

const TagItem = ({ tag }: { tag: string }) => (
  <button
    onClick={() => removeUrlParam(tag)}
    className=" bg-blue-medium text-blue-dark uppercase text-xs font-light py-2 px-3 text-center dark:bg-gray-dark dark:border dark:text-white"
  >
    {tag} <span className="text-blue-dark ml-1">&#x2715;</span>
  </button>
);

export default TagItem;
