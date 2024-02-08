import BlogCard from "@/components/shared/blog-card";
import { BlogsType } from "@/interfaces/blogs.interface";
import { BlogsService } from "@/services/blogs.service";

function getData() {
  try {
    const res = BlogsService.getAllBlog();
    return res;
  } catch (error) {
    return [];
  }
}

async function getLatestPost() {
  try {
    const latestPost = await BlogsService.getLatestOne();
    console.log("Latest post:", latestPost);
    return latestPost;
  } catch (error) {
    console.error("Error fetching latest post:", error);
    return null;
  }
}

const BlogPage = async () => {
  const data = await getData();
  const latestPost = await getLatestPost();

  return (
    <div className="md:max-w-[1220px] flex justify-between md:flex-row flex-col-reverse mx-auto pt-32">
      <div className="flex flex-col w-3/4 space-y-4">
        {data && data.length > 0 ? (
          data.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })
        ) : (
          <h3>No posts available.</h3>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-center md:text-3xl text-xl">Latest..</h3>
        <div className="flex flex-col space-y-4">
          {latestPost && latestPost.length > 0 ? (
            latestPost.map((post: BlogsType) => {
              return <BlogCard key={post.id} post={post} />;
            })
          ) : (
            <h3>No posts available.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
