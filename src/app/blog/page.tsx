import BlogCard from "@/components/shared/blog-card";
import LatestCard from "@/components/shared/latest-card";
import CardSkeleton from "@/components/skeletons/card-skeleton";
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
    return latestPost;
  } catch (error) {
    return null;
  }
}

const BlogPage = async () => {
  const data = await getData();
  const latestPost = await getLatestPost();
  console.log(latestPost);

  return (
    <div className="md:max-w-[1220px] flex justify-between md:flex-row md:gap-0 gap-4 flex-col-reverse mx-auto md:pt-32 pt-20 ">
      <div className="flex flex-1 overflow-auto flex-col gap-4">
        {data && data.length > 0 ? (
          data.map((post: BlogsType) => {
            return <BlogCard key={post.id} post={post} />;
          })
        ) : (
          <h3>No posts available.</h3>
        )}
      </div>
      {/* <CardSkeleton /> */}
      <div className="flex flex-col gap-4 md:sticky md:top-16 md:w-80 md:h-80 p-4">
        <h3 className="text-center  font-bold md:text-3xl  text-2xl">
          Latest post
        </h3>
        <div className="flex flex-col space-y-4">
          {latestPost && latestPost.length > 0 ? (
            latestPost.map((latestpost: BlogsType) => {
              return <LatestCard key={latestpost.id} latestpost={latestpost} />;
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
