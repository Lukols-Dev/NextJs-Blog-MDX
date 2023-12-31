import { MDX } from "@/lib/mdx";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import { getFormattedDate } from "@/lib/getFormattedDate";
import { BtnScrollTo } from "@/components/common/BtnScrollTo";

//frequency for read data 86400s
export const revalidate = 86400;

// export const generateStaticParams = async() =>{
//     const posts = await MDX.getAllPosts()

//     if(!posts) return []
//     // console.log(posts)
//     return posts.map((post)=> ({
//         postId: post.id
//     }))
// }

interface PostDetailsProps {
  params: {
    postId: string;
  };
}

export const generateMetadata = async ({
  params: { postId },
}: PostDetailsProps) => {
  const post = await MDX.getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
};

const PostDetails = async ({ params: { postId } }: PostDetailsProps) => {
  const post = await MDX.getPostByName(`${postId}.mdx`);
  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  // const tags = meta.tags.map((tag:string, index:any) => (
  //     <Link key={index} href={`/tags/${tag}`} className="px-4 py-1 bg-gray-500 rounded-lg text-white">{tag}</Link>
  // ))

  return (
    <section className="flex justify-center px-4 md:px-10 lg:px-32">
      <div className="prose lg:prose-xl">
        <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
        <p className="mt-0 text-sm">{pubDate}</p>
        <article>{content}</article>
        {/* <section>
                    <h3>Related:</h3>
                    <div className="flex flex-row gap-4">
                        {tags}
                    </div>
                </section> */}
        <Link
          href="/"
          className="mb-10 py-2 px-3 rounded-lg text-white bg-gradient-to-r from-violet-600 to-indigo-600 no-underline"
        >
          ← Back to home
        </Link>
      </div>
      {meta.tableContents.length > 0 ? (
        <aside className="min-w-[250px] h-fit max-h-1/2 p-4 gap-2 ml-4 hidden lg:flex lg:flex-col overflow-x-hidden overflow-y-scroll rounded-lg lg:sticky top-20 right-0 border-2 border-grey">
          {meta.tableContents.map((item: any, index: any) => (
            <BtnScrollTo
              key={index}
              id={index}
              href={item.link}
              text={item.text}
            />
          ))}
        </aside>
      ) : (
        <></>
      )}
    </section>
  );
};

export default PostDetails;
