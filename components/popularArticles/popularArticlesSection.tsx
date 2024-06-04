import { getPosts } from "@/actions/main";
import ImageWithFallback from "@/helpers/imageWithFallback";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IProps {
  customTags?: string[];
}

export default async function PopularArticlesSection({ customTags }: IProps) {
  const posts = await getPosts("popular", customTags);
  if (!posts) notFound();

  return (
    <section id="popular" className="max-w-7xl mx-4 lg:mx-auto my-16">
      <div className="flex mb-8">
        <div className="text-3xl font-medium text-blue-dark uppercase dark:text-white">
          popular
        </div>
        <div className="border-b-2 border-blue-dark dark:border-white w-full my-1 text-right ml-8">
          <div className="text-xs uppercase flex justify-end">
            see more{" "}
            <img src="/icon-arrow-right.svg" className="w-1 ml-1 fill-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* <!-- left: big article--> */}
        <div className="w-full md:w-1/2">
          <a href={posts.content[0].post.url} target="_blank" rel="nofollow">
            <ImageWithFallback
              src={
                posts.content[0].post.previewImageUrl
                  ? posts.content[0].post.previewImageUrl
                  : posts.content[0].post.defaultImage
              }
              postId={posts.content[0].post.id}
              className="w-full md:w-auto"
            />

            <div className="mt-3">
              <div className="text-xs text-sea dark:text-blue uppercase">
                devops | 18 min read
              </div>
              <div className="text-blue-dark dark:text-white">
                {posts.content[0].post.title}
              </div>
              <div className="text-xs font-extralight dark:text-blue-medium">
                20 Dec 2021 | by John Doe
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray md:hidden" />
        {/* <!-- right: small article --> */}
        <div className="w-full md:w-1/2">
          {/* <!-- --> */}
          {posts.content.slice(1, 4).map(({ post }, id) => (
            <>
              <a href={post.url} target="_blank" rel="nofollow">
                <div key={post.id} className="flex mb-3">
                  <div className="w-3/5 flex flex-col justify-center">
                    <div className="text-xs text-sea dark:text-blue uppercase">
                      devops | 18 min read
                    </div>
                    <div className="text-blue-dark dark:text-white">
                      {post.title}
                    </div>
                    <div className="text-xs font-extralight text-blue dark:text-blue-medium">
                      20 Dec 2021 | by John Doe
                    </div>
                  </div>
                  <div className="w-2/5 relative drop-shadow-xl shadow-gray overflow-hidden h-28">
                    <ImageWithFallback
                      src={
                        post.previewImageUrl
                          ? post.previewImageUrl
                          : post.defaultImage
                      }
                      postId={post.id}
                      className="absolute top-0 left-0 w-full h-auto"
                    />
                  </div>
                </div>
              </a>
              {id !== 2 && <hr className="border-gray mb-4" />}
            </>
          ))}

          {/* <!-- --> */}
        </div>
      </div>
    </section>
  );
}
