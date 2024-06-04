import { getPosts } from "@/actions/main";
import ImageWithFallback from "@/helpers/imageWithFallback";
import { notFound } from "next/navigation";

interface IProps {
  customTags?: string[];
}
export default async function RecommendedArticlesSection({
  customTags,
}: IProps) {
  const posts = await getPosts("recommended", customTags);
  if (!posts) notFound();

  return (
    <section id="recommended" className="max-w-7xl mx-4 lg:mx-auto my-16">
      <div className="flex mb-8">
        <div className="text-3xl font-medium text-blue-dark uppercase dark:text-white">
          recommended
        </div>
        <div className="border-b-2 border-blue-dark dark:border-white w-full my-1 text-right ml-8">
          <div className="text-xs uppercase flex justify-end">
            see more <img src="/icon-arrow-right.svg" className="w-1 ml-1" />
          </div>
        </div>
      </div>

      {/* <!-- --> */}

      {posts.content.slice(0, 2).map(({ post }, i) => (
        <>
          <a href={post.url} target="_blank" rel="nofollow">
            <div className="flex mb-5 mt-3">
              <div className="w-2/6">
                <ImageWithFallback
                  src={
                    post.previewImageUrl
                      ? post.previewImageUrl
                      : post.defaultImage
                  }
                  postId={post.id}
                  className="drop-shadow-xl shadow-gray pr-8"
                />
              </div>
              <div className="w-4/6 flex flex-col justify-center">
                <div className="text-xs text-sea uppercase mb-2 dark:text-blue">
                  devops | 18 min read
                </div>
                <div className="text-blue-dark mb-2 md:mb-5 dark:text-white">
                  {post.title}
                </div>
                <div className="text-xs font-extralight text-blue dark:text-blue-medium">
                  20 Dec 2021 | by John Doe
                </div>
              </div>
            </div>
          </a>
          {i !== 1 && <hr className="border-gray" />}
        </>
      ))}
    </section>
  );
}
