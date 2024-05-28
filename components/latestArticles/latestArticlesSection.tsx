import { getPosts } from "@/actions/main";
import { notFound } from "next/navigation";

interface IProps {
  customTags?: string[];
}
export default async function LatestArticlesSection({ customTags }: IProps) {
  const posts = await getPosts("latest", customTags);
  if (!posts) notFound();

  return (
    <section id="latest" className="max-w-5xl mx-4 lg:mx-auto my-16">
      <div className="flex mb-8">
        <div className="text-3xl font-medium text-blue-dark uppercase">
          latest
        </div>
        <div className="border-b-2 border-blue-dark w-full my-1 text-right ml-8">
          <div className="text-xs uppercase flex justify-end">
            see more <img src="/icon-arrow-right.svg" className="w-1 ml-1" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {posts.content.slice(0, 6).map(({ post }) => (
          <div key={post.id} className="">
            <div className="w-full h-44 overflow-hidden relative">
              <img
                src={post.previewImageUrl}
                alt=""
                className="absolute w-auto min-w-full h-full top-0 left-0"
              />
            </div>
            <div className="mt-3">
              <div className="text-xs text-sea uppercase">
                devops | 18 min read
              </div>
              <div className="text-blue-dark text-sm md:text-base">
                {post.title}
              </div>
              <div className="text-xs font-extralight text-blue">
                20 Dec 2021 | by John Doe
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
