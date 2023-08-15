import { MDX } from "@/lib/mdx";
import PostCard from "./common/postCard";
import { Pagination } from "@mui/material";

interface PostProps {
  filter?: string;
}

const Posts = async ({ filter }: PostProps) => {
  const posts = await MDX.getAllPosts(filter);

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <div className="w-full flex justify-center">
      <ul className="px-4 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((item: any, index: any) => (
          <li key={index} className="mt-4">
            <PostCard title={item.title} id={item.id} image={item.image} />
          </li>
        ))}
      </ul>
      {posts.length > 10 ? (
        <div className="w-full mt-20 flex justify-center">
          <Pagination count={10} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Posts;
